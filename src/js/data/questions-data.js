class QuestionsData {
    constructor() {
        this.questions = [
            {
                question: '',
                code: `
                    let obj = {
                        "0": 1,
                        0: 2
                    };
                   
                    alert( obj["0"] + obj[0] );
                `,
                answer: 1,
                choices: [2, 4, 3, 'error'],
            },
        ];
    }

    // init() {
    //     console.log('Questions Data')
    // }
}

export default QuestionsData;