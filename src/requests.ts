import { Question } from "./models/Question"

async function getQuestions() {
    let questionArray: Array<Question> = []
    const response = await fetch('https://the-trivia-api.com/v2/questions?difficulties=easy&limit=50')
        .then(response => response.json())
        .then(data => data.forEach((question: Question) => questionArray.push(new Question(question))
        ))
    return await questionArray
}

export {
    getQuestions
}