<script setup lang="ts">
  import { computed, ref } from "vue";
  import { VBtn, VCard, VCardText, VCardTitle, VIcon, VSpacer } from "vuetify/components";

  const props = defineProps({
    initial: {
      type: Number,
      required: true,
    },
  });
  const count = ref(props.initial);
  const doubledCount = computed(() => count.value * 2);

  function addCount(): void {
    console.log(process.env.NODE_ENV);
    count.value++;
  }
</script>

<template>
  <v-card>
    <v-card-title>
      <v-icon class="me-3">mdi-plus</v-icon>
      Counter

      <v-spacer />

      <v-btn color="primary" elevation="5" flat @click="addCount"> Count Up </v-btn>
    </v-card-title>

    <v-card-text class="pb-0 mb-0">
      <h1 class="text-h2 text-center">"{{ count }}"</h1>
    </v-card-text>

    <v-card-text class="pt-0">
      <div class="caption text-center">Double is {{ doubledCount }}</div>
    </v-card-text>
  </v-card>
</template>
