<script setup lang="ts">
  import ProductDisplay from "../VueMastery_Socks/components/ProductDisplay.vue";
  import { reactive } from "vue";
  interface IReactiveData {
    cart: Array<number>;
    premium: boolean;
  }
  const r = reactive<IReactiveData>({ cart: [], premium: false });

  function updateCart(id: number) {
    r.cart.push(id);
    console.log(r.cart);
  }
</script>

<template>
  <div class="page">
    <div class="nav-bar">
      Vue Mastery - Intro to Vue 3 course example - composition API (script setup)
    </div>
    <div class="cart">Cart({{ r.cart.length }})</div>
    <ProductDisplay :premium="r.premium" @add-to-cart="updateCart"></ProductDisplay>
  </div>
</template>

<style scoped>
  .page {
    background-color: #f2f2f2;
    margin: 0px;
    font-family: tahoma;
    color: #282828;
  }

  .cart {
    margin: 25px 100px;
    float: right;
    border: 1px solid #d8d8d8;
    padding: 30px 30px;
    background-color: white;
    -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
  }

  .nav-bar {
    font-size: 1.6vw;
    padding: 1vw;
    background: linear-gradient(-90deg, #84cf6a, #16c0b0);
    height: 4vw;
    margin-bottom: 25px;
    -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.57);
  }
</style>
