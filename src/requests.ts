import type { Ref } from "vue"
import type { Question } from "./models/Question"

let getQuestions = (questions: Ref<Array<Question>>) => {
    fetch('https://the-trivia-api.com/v2/questions?difficulties=easy&limit=50')
    .then(response => response.json())
    .then(data => questions.value = data)
}

export {
    getQuestions
}