<template>
  <a :href="props.link"
    ><div class="m-2 shadow-xl card w-80 bg-base-100">
      <figure>
        <img :src="props.image" :alt="props.alt" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          {{ props.title }}
          <div class="badge badge-secondary">{{ props.badge }}</div>
        </h2>
        <p>{{ props.body }}</p>
      </div>
    </div>
  </a>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  image: null,
  alt: null,
  badge: null,
  title: String,
  body: String,
  link: null,
});
</script>

<style scoped></style>
