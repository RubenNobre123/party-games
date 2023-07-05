export class Question {
    category: string
    question: { text: string};
    correctAnswer: string;

    constructor(jsonObj: Question) {
        this.category = jsonObj.category;
        this.question = jsonObj.question
        this.correctAnswer = jsonObj.correctAnswer;
    }
}