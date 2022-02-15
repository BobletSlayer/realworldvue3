<script setup lang="ts">
  import IReview from "../types/IReview";
  import { reactive } from "vue";

  const emits = defineEmits(["review-submitted"]);
  const r = reactive<IReview>({
    name: "",
    review: "",
    rating: 0,
    recommend: "",
  });

  function onSubmit(): void {
    if (r.name === "" || r.review === "" || r.rating === 0 || r.recommend === "") {
      alert("Review is incomplete. Please fill out every field.");
      return;
    }

    let productReview: IReview = {
      name: r.name,
      review: r.review,
      rating: r.rating,
      recommend: r.recommend,
    };
    emits("review-submitted", productReview);
    r.name = "";
    r.review = "";
    r.rating = 0;
    r.recommend = "";
  }
</script>

<template>
  <form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <label for="name">Name:</label>
    <input id="name" v-model="r.name" />

    <label for="review">Review:</label>
    <textarea id="review" v-model="r.review"></textarea>

    <label for="rating">Rating:</label>
    <select id="rating" v-model.number="r.rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>

    <!-- solution -->
    <label for="recommend">Would you recommend this product?</label>
    <select id="recommend" v-model="r.recommend">
      <option>Yes</option>
      <option>No</option>
    </select>
    <!-- solution -->

    <input class="button" type="submit" value="Submit" />
  </form>
</template>

<style scoped>
  h3 {
    font-size: 25px;
  }

  input {
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
    border: inherit;
  }

  label {
    font-size: 20px;
    margin-bottom: 5px;
  }

  select {
    height: 40px;
    font-size: 20px;
    background-color: white;
    cursor: pointer;
    border: inherit;
  }

  textarea {
    width: 95%;
    height: 70px;
    padding: 10px;
    font-size: 20px;
    margin-bottom: 20px;
    border: inherit;
  }

  .review-form {
    display: flex;
    flex-direction: column;
    width: 425px;
    padding: 20px;
    margin: 40px;
    border: 2px solid #d8d8d8;
    background-color: white;
    -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
    box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
  }

  .button {
    margin: 30px;
    background-color: #39495c;
    border-radius: 5px;
    font-size: 18px;
    width: 160px;
    height: 60px;
    color: white;
    padding: 20px;
    box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
      inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
      inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
    text-align: center;
    cursor: pointer;
  }

  .review-form .button {
    display: block;
    margin: 30px auto;
  }
</style>
