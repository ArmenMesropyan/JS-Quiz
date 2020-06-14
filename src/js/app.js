import '../css/main.css';
import factory from './factory';

const QuestionsView = Object.values(factory)[0];

const nextBtn = document.getElementById('next');

nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const selected = document.querySelector('.question__choice:checked');
    QuestionsView.init(selected.value);
});