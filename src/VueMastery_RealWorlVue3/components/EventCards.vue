<script setup lang="ts">
  const props = defineProps({
    event: {
      required: true,
      type: Object,
    },
  });
  console.log(props.event);
</script>

<template>
  <router-link class="event-link" :to="{ name: 'EventDetails', params: { id: props.event.id } }">
    <div v-if="props.event" class="event-card">
      <span>@{{ props.event.time }} on {{ props.event.date }}</span>
      <h4>{{ props.event.title }}</h4>
    </div>
  </router-link>
</template>
<style scoped>
  .event-card {
    padding: 20px;
    width: 250px;
    cursor: pointer;
    border: 1px solid #39495c;
    margin-bottom: 18px;
  }

  .event-card:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  }

  .event-link {
    color: #2c3e50;
    text-decoration: none;
  }
</style>
