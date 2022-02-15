<script setup lang="ts">
  import { computed, reactive } from "vue";
  import IReview from "../types/IReview";
  import IVariant from "../types/IVariant";
  import ReviewForm from "./ReviewForm.vue";
  import ReviewList from "./ReviewList.vue";

  const images = import.meta.globEager("/src/assets/*.jpg");

  const props = defineProps({
    premium: {
      type: Boolean,
      required: true,
    },
  });

  const emits = defineEmits(["add-to-cart"]);

  interface IProductReactive {
    product: string;
    brand: string;
    selectedVariant: number;
    details: Array<string>;
    variants: Array<IVariant>;
    reviews: Array<IReview>;
  }

  const r = reactive<IProductReactive>({
    product: "Socks",
    brand: "Vue Mastery",
    selectedVariant: 0,
    details: ["50% cotton", "30% wool", "20% polyester"],
    variants: [
      {
        id: 2234,
        color: "green",
        image: "/src/assets/socks_green.jpg",
        quantity: 5,
      },
      {
        id: 2235,
        color: "blue",
        image: "/src/assets/socks_blue.jpg",
        quantity: 5,
      },
    ],
    reviews: [],
  });
  const title = computed(() => r.brand + " " + r.product);
  const image = computed(() => images[r.variants[r.selectedVariant].image].default);
  const inStock = computed(() => r.variants[r.selectedVariant].quantity != 0);
  const shipping = computed(() => {
    if (props.premium) {
      return "Free";
    }
    return 2.99;
  });

  function addToCart(): void {
    emits("add-to-cart", r.variants[r.selectedVariant].id);
    r.variants[r.selectedVariant].quantity -= 1; // It was not in +L11-End" branch
  }

  function refillStock(): void {
    r.variants[r.selectedVariant].quantity = 10; // It was not in +L11-End" branch
  }

  function updateVariant(index: number): void {
    r.selectedVariant = index;
  }

  function addReview(review: IReview): void {
    r.reviews.push(review);
  }
</script>

<template>
  <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img :src="image" />
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>

        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>

        <p>Shipping: {{ shipping }}</p>
        <ul>
          <li v-for="detail in r.details" :key="detail">{{ detail }}</li>
        </ul>

        <div
          v-for="(variant, index) in r.variants"
          :key="variant.id"
          class="color-circle"
          :style="{
            backgroundColor: variant.quantity != 0 ? variant.color : '#f2f2f2',
          }"
          @mouseover="updateVariant(index)"
        ></div>

        <button
          class="addBtn button"
          :class="{ disabledButton: !inStock }"
          :disabled="!inStock"
          @click="addToCart"
        >
          Add to Cart
        </button>
        <button
          class="refillBtn button"
          :class="{ disabledButton: inStock }"
          :disabled="inStock"
          @click="refillStock"
        >
          Refill stock
        </button>
      </div>
    </div>
    <review-list v-if="r.reviews.length" :reviews="r.reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
  </div>
</template>

<style scoped>
  h1 {
    font-size: 38px;
  }

  img {
    border: 2px solid #d8d8d8;
    width: 70%;
    margin: 40px;
    padding: 15px;
    -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
  }

  p {
    font-size: 22px;
  }

  ul {
    margin-left: 20px;
    list-style-type: none;
  }

  li {
    font-size: 18px;
  }

  .button {
    margin: 10px;
    background-color: #39495c;
    border-radius: 5px;
    font-size: 18px;
    width: 150px;
    height: 60px;
    color: white;
    padding: 10px;
    box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
      inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
      inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
    text-align: center;
    cursor: pointer;
  }

  .disabledButton {
    background-color: #d8d8d8;
    cursor: not-allowed;
  }
  .color-circle {
    width: 50px;
    height: 50px;
    margin-top: 8px;
    border: 2px solid #d8d8d8;
    border-radius: 50%;
  }

  .product-display {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }

  .product-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .product-image,
  .product-info {
    width: 50%;
  }

  @media only screen and (max-width: 600px) {
    .product-display {
      flex-direction: column;
    }

    .product-image,
    .product-info {
      margin-left: 10px;
      width: 100%;
    }

    .review-form {
      width: 90%;
    }
  }
</style>
