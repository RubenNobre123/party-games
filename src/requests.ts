import type { Ref } from "vue"
import type { Question } from "./models/Question"

async function getQuestions() {
    const response = await fetch('https://the-trivia-api.com/v2/questions?difficulties=easy&limit=50')
    return await response.json()
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
    getQuestions,
    translateQuestion
}