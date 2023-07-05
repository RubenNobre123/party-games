<script async setup lang="ts">
import { getQuestions } from './requests';
import { computed, onMounted, ref, watch, type Ref } from 'vue';
import { Question } from './models/Question'

let questions = ref<Array<Question>>()
let currentQuestion : Ref<Question>|Ref<undefined> = ref()

onMounted(async () => {
  questions.value = await getQuestions()
  currentQuestion.value = questions.value[0]
});
</script>

<template>
  <div class="container" v-if="currentQuestion !== undefined">
    <div class="prev-button">
        <button>&lt;-</button>
    </div>
    <div class="question-area">
      <div class="text">
          <p>{{ currentQuestion.question.text }}</p>
      </div>
      <div class="answer">
          <p>{{ currentQuestion.correctAnswer }}</p>
      </div>
      <div class="buttons">
        <button class="">Right</button>
        <button class="">Wrong</button>
      </div>
    </div>
    <div class="next-button">
        <button>-&gt;</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100vh;
}

.prev-button, .next-button {
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.prev-button button, .next-button button {
  height: 50px;
  width: 50px;
}

.question-area {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 80%;
  padding: 20px;
  border: 2px solid black;
  border-radius: 10px;
}

.text, .answer {
  width: 100%;
  text-align: center;
}

.buttons {
  display: flex;
  justify-content: space-between;
  width: 30%;
}

.buttons button {
  width: 45%;
  padding: 10px;
}
</style>