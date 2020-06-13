class QuestionsView {
    constructor(controller) {
        this.controller = controller;
    }

    init() {
        console.log('Questions View');
        this.controller.init();
    }
}

export default QuestionsView;