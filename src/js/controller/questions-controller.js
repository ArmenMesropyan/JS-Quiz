class QuestionsController {
    constructor(api) {
        this.api = api;
    }

    init() {
        console.log('Questions Controller');
        this.api.init();
    }
}

export default QuestionsController;