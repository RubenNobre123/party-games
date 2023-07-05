let getQuestions = () => {
    return fetch('https://the-trivia-api.com/v2/questions?difficulties=easy&limit=50')
    .then(response => response.json())
}

export {
    getQuestions
}