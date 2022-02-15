<script setup lang="ts">
  import EventCard from "./EventCards.vue";
  import EventService from "../services/EventService";
  import IEvent from "../types/IEvent";
  import { ref } from "vue";

  const events = ref<Array<IEvent>>();

  EventService.getEvents()
    .then((response) => {
      events.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
</script>

<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
  .events {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
