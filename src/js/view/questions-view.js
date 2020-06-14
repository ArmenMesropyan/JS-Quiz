class QuestionsView {
    constructor(controller) {
        this.controller = controller;
        this.counter = 0;

        this.codeContainer = document.querySelector('.question__js');
        this.choiceContainer = document.querySelector('.question__list');
        this.title = document.querySelector('.question__title');

        this.mistakes = [];
    }

    static choiceTemplate(value, i) {
        return `
            <li class="question__item" tab-index="1">
                <label>
                    <input type="radio" value="${i}" name="choice" class="question__choice">
                    <span class="question__styles"></span>
                    ${value}
                </label>
            </li>
        `;
    }

    clearContainer() {
        this.codeContainer.innerHTML = '';
        this.choiceContainer.innerHTML = '';
        this.title.innerHTML = '';
    }

    initHTML(question) {
        this.title.innerHTML = question.question;
        this.codeContainer.innerHTML = question.code;

        // eslint-disable-next-line no-undef
        hljs.highlightBlock(this.codeContainer);

        question.choices.forEach((choice, i) => {
            const html = QuestionsView.choiceTemplate(choice, i);
            this.choiceContainer.insertAdjacentHTML('beforeend', html);
        });
    }

    checkValue(value) {
        const isTrueAnswer = String(this.question.answer) === value;
        if (!isTrueAnswer) this.mistakes.push(this.question);
    }

    init() {
        const question = this.controller.init(this.counter);
        this.clearContainer();
        if (!question) {
            console.log(this.mistakes);
            return;
        }
        this.question = question;

        this.initHTML(question);
        this.counter++;
    }
}

export default QuestionsView;