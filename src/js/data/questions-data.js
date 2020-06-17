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
            {
                question: 'What will be printed?',
                code: `
"use strict"
a = [1, 2, 3];
b = [1, 2, 3];
console.log(a == b);
                `,
                answer: 2,
                choices: ['true', 'false', 'error'],
            },
            {
                question: 'What will be alerted?',
                code: `
let str = "Hello World!";
str.something = 2;
alert(str.something);
                `,
                answer: 3,
                choices: ['Hello World', '2', 'error', 'undefined'],
            },
            {
                question: 'What is the result of this expression?',
                code: `
[].push(1,2).unshift(3).join();
                `,
                answer: 2,
                choices: ['3, 1, 2', '3, 1', 'error', 'undefined'],
            },
            {
                question: 'What will be alerted?',
                code: `
f.call(f);

function f() {
    alert( this );
}
                `,
                answer: 0,
                choices: ['f function code', '[object Object]', 'error', 'window'],
            },
            {
                question: 'Which value will be alerted?',
                code: `
function User() { }
User.prototype = { admin: false };

let user = new User();

User.prototype = { admin: true };

alert(user.admin);
                `,
                answer: 1,
                choices: ['true', 'false', 'undefined'],
            },
            {
                question: 'What happens if you alert true + false?',
                code: `
console.log(true + false);
                `,
                answer: 2,
                choices: ['"truefalse"', 'NaN', '1', '0'],
            },
            {
                question: 'What is the result of this expression?',
                code: `
[] + false + null + true
                `,
                answer: 0,
                choices: ['"falsenulltrue"', 'NaN', 'error', 'NaNtrue'],
            },
        ];
    }

    init(count) {
        return this.questions[count];
    }
}

export default QuestionsData;