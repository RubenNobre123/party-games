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
        <div class="options">
            <div class="option"><p>Option</p></div>
            <div class="option"><p>Option</p></div>
            <div class="option"><p>Option</p></div>
            <div class="option"><p>Option</p></div>
      </div>
      <div class="hint">
          <p>Hint: </p>
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
  width: 90vw;
  max-width: 1200px;
  margin: auto;
  align-items: center;
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

.text {
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  justify-content: space-around;
}

.buttons {
  width: 100%;
  height: 20%;
}
.buttons button {
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
}
.options {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
}
.option {
  width: calc(50% - 10px);
  border: 1px solid #000;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 20px;
}

.hint {
    text-align: center;
}

@media (max-width: 768px) {
 .option {
    width: 80%;
  }
  .options {
    display: flex;
    justify-content: space-evenly;
  }
}
</style>