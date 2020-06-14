class QuestionsView {
    constructor(controller) {
        this.controller = controller;
        this.counter = 0;

        this.codeContainer = document.querySelector('.question__js');
        this.choiceContainer = document.querySelector('.question__list');
    }

    static choiceTemplate(value, i) {
        return `
            <li class="question__item">
                <label>
                    <input type="radio" value="${i}" name="choice" class="question__choice">
                    ${value}
                </label>
            </li>
        `;
    }

    clearContainer() {
        this.codeContainer.innerHTML = '';
        this.choiceContainer.innerHTML = '';
    }

    init(value) {
        const question = this.controller.init(this.counter);

        this.clearContainer();
        this.codeContainer.innerHTML = question.code;

        // eslint-disable-next-line no-undef
        hljs.initHighlighting();

        question.choices.forEach((choice, i) => {
            const html = QuestionsView.choiceTemplate(choice, i);
            this.choiceContainer.insertAdjacentHTML('beforeend', html);
        });

        const isTrueAnswer = String(question.answer) === value;
        console.log('isTrueAnswer: ', isTrueAnswer);

        this.counter++;
    }
}

export default QuestionsView;