function showSection() {
    const section = document.querySelector('.mistakes__section');
    section.style.display = 'block';
}

function changeMainTagClass() {
    const main = document.getElementsByTagName('main')[0];
    main.classList.replace('questions', 'mistakes');
}

class MistakesView {
    constructor() {
        this.mistakes = [];

        this.container = document.querySelector('.mistakes__list');
        this.result = document.querySelector('.mistakes__title');
        this.codeSelector = '.mistakes__js';
    }

    static mistakeHTMLTemplate({
        code, wrong, answer, choices, question,
    } = {}) {
        return `
            <li class="mistakes__item">
                <h3 class="mistakes__question">${question}</h3>
                <div class="mistakes__code">
                    <pre>
                        <code class="hljs javascript mistakes__js">
                            ${code}
                        </code>
                    </pre>
                </div>
                <div class="mistakes__answers">
                    <div class="mistakes__wrong">
                        Your answer is
                        <span class="mistakes__answer">${choices[wrong]}</span>
                    </div>
                    <div class="mistakes__correct">
                        Correct answer is
                        <span class="mistakes__answer">${choices[answer]}</span>
                    </div>
                </div>
            </li>
        `;
    }

    get codeContainer() {
        return document.querySelectorAll(this.codeSelector);
    }

    static mistakeResultTemplate(wrongCount, questionsCount) {
        const correctCount = questionsCount - wrongCount;
        const percent = (correctCount * 100) / questionsCount;
        console.log(percent);
        return `
            ${correctCount}/${questionsCount} correct answers, ${Math.round(percent)}% result!
        `;
    }

    init(mistakes, questionsCount) {
        this.mistakes = mistakes;

        changeMainTagClass();
        showSection();

        if (!this.mistakes.length) return;

        this.result.innerHTML = MistakesView.mistakeResultTemplate(mistakes.length, questionsCount);

        this.mistakes.forEach((mistake) => {
            const html = MistakesView.mistakeHTMLTemplate(mistake);
            this.container.insertAdjacentHTML('beforeend', html);
        });

        // eslint-disable-next-line no-undef
        this.codeContainer.forEach((container) => hljs.highlightBlock(container));
    }
}

const mistakesView = new MistakesView();

export default mistakesView;