<script setup lang="ts">
  import { VCol, VContainer, VForm, VRow, VTextField } from "vuetify/components";
  import { ref } from "vue";

  const color = ref("lightblue");
</script>

<template>
  <v-form>
    <v-container>
      <v-row no-gutters>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="color"
            class="mx-4 my-0"
            clearable
            label="Change the color:"
            prepend-inner-icon="mdi-palette"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <div class="box mx-4 pa-7 rounded" />
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<style scoped>
  .box {
    background-color: v-bind(color);
    border: 1px solid rgba(0, 0, 0, 0.15);
  }
</style>
