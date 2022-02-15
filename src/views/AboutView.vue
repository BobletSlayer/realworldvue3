<script setup lang="ts">
  import { VAlert, VBtn, VContainer, VImg } from "vuetify/components";
  import JedlikCimer from "/src/assets/Jedlik.png";
</script>

<template>
  <v-container class="page text-center">
    <v-img class="mx-auto" max-width="150" :src="JedlikCimer" transition="fab-transition" />
    <h1>{{ $t("aboutMsg") }}</h1>

    <v-btn class="ma-3" color="jedlikBlue" to="/">{{ $t("backToHome") }}</v-btn>

    <h1>{{ $t("colorsOfTheme") }}</h1>
    <v-alert color="primary">primary</v-alert>
    <v-alert color="background">background</v-alert>
    <v-alert color="error">error</v-alert>
    <v-alert color="danger">danger</v-alert>
    <v-alert color="info">info</v-alert>
    <v-alert color="secondary">secondary</v-alert>
    <v-alert color="success">success</v-alert>
    <v-alert color="surface">surface</v-alert>
    <v-alert color="warning">warning</v-alert>
    <v-alert color="jedlikRed">jedlikRed</v-alert>
    <v-alert color="jedlikBlue">jedlikBlue</v-alert>
  </v-container>
</template>

<style scoped>
  h1 {
    color: gray;
  }
  img {
    height: 200px;
  }
</style>
