class MistakesView {
    constructor() {
        this.mistakes = [];
    }

    init(mistakes) {
        this.mistakes = mistakes;
    }
}

const mistakesView = new MistakesView();

export default mistakesView;