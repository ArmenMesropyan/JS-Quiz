class QuestionsController {
    constructor(data) {
        this.data = data;
    }

    init(count) {
        const question = this.data.init(count);
        return question;
    }
}

export default QuestionsController;