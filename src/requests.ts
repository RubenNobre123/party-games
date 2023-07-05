import { Question } from "./models/Question"

async function getQuestions() {
    let questionArray: Array<Question> = []
    const response = await fetch('https://the-trivia-api.com/v2/questions?difficulties=easy&limit=50')
        .then(response => response.json())
        .then(data => data.forEach((question: Question) => questionArray.push(new Question(question))))
    return await questionArray
}

async function translateQuestion(question: string) {
    return await fetch("https://libretranslate.com/translate", {
        method: "POST",
        body: JSON.stringify({
            q: question,
            source: "auto",
            target: "pt",
            format: "text",
            api_key: ""
        }),
	    headers: { "Content-Type": "application/json" }
    });
}

export {
    getQuestions
}