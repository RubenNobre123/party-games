<script setup lang="ts">
import { computed, ref } from 'vue'
defineProps<{
  msg: string
}>()

const count = ref(0)

const realCount = computed(() => count)

let increment = () => {
  count.value++;
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ realCount }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
      <button @click="increment">Click me!</button>
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
