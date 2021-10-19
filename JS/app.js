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
const nextBtn = document.querySelector('#next-btn');
const categorizeContainer = document.querySelector('#categorize-container');
const categories = document.querySelectorAll('.cat')
const questionContainer = document.querySelector('#question-container');
const scoreContainer = document.querySelector('.score-container');

/*------------------------- Event Listeners ---------------------------*/
playBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', selectRandomQuestion);
categories.forEach(function (btn) {
  btn.addEventListener('click', setCategorize)
});


/*----------------------------- Functions -----------------------------*/

function startGame() {
  score = 0
  playBtn.style.display = 'none';
  nextBtn.style.display = 'none'
	h1.style.display = 'none';
	categorizeContainer.classList.remove('hide');
}

function setCategorize(evt) {
  nextBtn.style.display = 'block';
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
	console.log(questions);
	selectRandomQuestion();
}

function selectRandomQuestion() {
  let idx = Math.floor(Math.random() * questions.length)
  if (questions[idx].asked === false) {
    renderQuestion(idx)
    questions[idx].asked = true
    questions.push()
    correct = questions[idx].correctAnswer
	}else {
    selectRandomQuestion()
  }
}

function renderQuestion(idx) {
  hidePrevQuestion()
  categorizeContainer.style.display = 'none'
	const question = document.createElement('h2');
	question.innerText = questions[idx].question;
	questionContainer.appendChild(question);
  scoreContainer.innerText = 'SCORE: '+score
	renderChoices(questions[idx]);
}

function hidePrevQuestion() {
  const h2 = document.querySelector('h2')
  if (h2) {
    h2.remove()
  }
}

function hidePrevChoises() {
  const prevChoices = document.querySelectorAll('.optionalChoice')
  if (prevChoices) {
    prevChoices.forEach(choice => {
      choice.remove()
    })
  }
}

function renderChoices(question) {
  hidePrevChoises()
	question.choices.forEach((choice, index) => {
		let button = document.createElement('button');
		button.innerText = choice;
		button.id = index;
    button.classList.add('optionalChoice')
		button.addEventListener('click', selectAnswer);
		console.log(button);
		questionContainer.appendChild(button);
	});
}

function selectAnswer(evt) {
	console.log(evt.target.id);
	if (parseInt(evt.target.id) === correct) {
    alert('Your answer is correct');
    score += 10;
    scoreContainer.innerText = 'SCORE: ' + score;
		console.log('right');
		// correct.style.backgroundColor = 'green';
	} else {
    alert('Your answer is wrong');
		console.log('wrong');
		// button.style.backgroundColor = 'red'
	}
  
}





