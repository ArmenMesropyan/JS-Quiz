class QuestionsData {
    constructor() {
        this.questions = [
            {
                question: 'What will be printed in the console?',
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
            {
                question: 'What will be alerted?',
                code: `
for(let i=0; i<10; i++) {
    setTimeout(function() {
        alert(i);
    }, 100);
}
                `,
                answer: 1,
                choices: ['0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10', '0, 1, 2, 3, 4, 5, 6, 7, 8, 9', '10 item 10', 'error'],
            },
            {
                question: 'Which value will be displayed?',
                code: `
let x = 5;
alert( x++ );
                `,
                answer: 0,
                choices: ['5', '6', 'number', 'type error'],
            },
        ];
    }

    init(count) {
        return this.questions[count];
    }
}

export default QuestionsData;