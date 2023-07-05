<script setup lang="ts">
import { getQuestions } from './requests';
import { computed, onMounted, ref, watch, type Ref } from 'vue';
import { Question } from './models/Question'

let questions = ref<Array<Question>>([])
onMounted(() => {
  getQuestions(questions)
})

let questionsSize = computed(() => questions.value.length)
let slowSize = ref(0)

let increment = (n: Ref<number>, limit: number) => {
  if (n.value != limit) {
    n.value = n.value + 1
    setTimeout(increment, 100 - n.value*2, n, limit) // syntax is (callbackfn, delay, ...args)
  }
}

watch(questionsSize, (newVal, _) => {
  setTimeout(() => {
    increment(slowSize, newVal)
  }, 100)
})

</script>

<template>
  <header>
    Loaded {{ slowSize }} questions<br>

  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>