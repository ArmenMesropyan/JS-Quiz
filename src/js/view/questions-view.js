class QuestionsView {
    constructor(controller) {
        this.controller = controller;
        this.nextBtn = document.getElementById('next');
    }

    init() {
        this.nextBtn.addEventListener('click', () => {
            console.log(this.nextBtn);
            console.log('Questions View');
            this.controller.init();
        });
    }
}

export default QuestionsView;