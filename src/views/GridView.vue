<script setup lang="ts">
  import { VCard, VCardText, VCardTitle, VCol, VContainer, VRow } from "vuetify/components";
  import { useDisplay } from "vuetify";

  const myColors = ["green-lighten-2", "yellow-lighten-2", "blue-lighten-2", "red-lighten-2"];

  const lorem =
    "Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.";
</script>

<template>
  <v-container class="pa-0" fluid>
    <v-row>
      <v-col v-for="n in 12" :key="n" cols="12" lg="3" md="4" sm="6">
        <v-card :color="myColors[n % 4]" dark>
          <v-card-title class="title" primary>{{
            "Actual breakpoint: " + useDisplay().name.value
          }}</v-card-title>
          <v-card-text>{{ lorem.slice(0, n * 23) }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
  }
</style>
