export class Question {
    category: string
    question: { text: string};

    constructor(jsonObj: Question) {
        this.category = jsonObj.category;
        this.question = jsonObj.question
    }
}