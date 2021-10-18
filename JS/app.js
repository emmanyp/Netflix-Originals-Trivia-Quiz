/*---------------------------- Constants -----------------------------*/

import { laCasaDePapleQuestions } from '../data/LaCasadePapelQuestions.js';

import {bridgertonQuestions} from '../data/Bridgertonquestions.js';

import { squidGameQuestions } from '../data/SquidGamequestions.js';

import {theQueensGambitQuestions} from "../data/theQueen'sGambitQuestions.js"

/*------------------------- Variables (state) ------------------------*/

let questions; 
let score; 
let correct;
/*--------------------- Cached Element References ---------------------*/

const h1 = document.querySelector('#heading');
const playBtn = document.querySelector('#play-btn');
const categorizeContainer = document.querySelector('#categorize-container');
const categories = document.querySelectorAll('.cat')
// console.log(categories);
const questionContainer = document.querySelector('#question-container');

/*------------------------- Event Listeners ---------------------------*/

playBtn.addEventListener('click', startGame);
categories.forEach(function (btn) {
	btn.addEventListener('click', setCategorize)
});


/*----------------------------- Functions -----------------------------*/

function startGame() {
  playBtn.style.display = 'none';
	h1.style.display = 'none';
	categorizeContainer.classList.remove('hide');
}

function setCategorize(evt) {
	if (evt.target.id === 'sgame-button') {
		questions = squidGameQuestions;
	}
	if (evt.target.id === 'bridg-button') {
		questions = bridgertonQuestions;
	}
	if (evt.target.id === 'lcdp-button') {
		questions = laCasaDePapleQuestions;
	}
	if (evt.target.id === 'tqg-button') {
		questions = theQueensGambitQuestions;
	}
	// console.log(questions);
	selectRandomQuestion();
}

function selectRandomQuestion() {
  let idx = Math.floor(Math.random() * questions.length)
  if (questions[idx].asked === false) {
    renderQuestion(idx)
    questions[idx].asked = true
    correct = questions[idx].correctAnswer
	}else {
    selectRandomQuestion()
  }
}

function renderQuestion(idx) {
	const question = document.createElement('h1');
	question.innerText = questions[idx].question;
	questionContainer.appendChild(question);
	renderChoices(questions[idx]);
}

function renderChoices(question) {
	question.choices.forEach((choice, index) => {
		let button = document.createElement('button');
		button.innerText = choice;
		button.id = index;
		button.addEventListener('click', selectAnswer);
		console.log(button);
		questionContainer.appendChild(button);
	});
}

