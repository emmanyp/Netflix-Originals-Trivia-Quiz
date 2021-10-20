/*---------------------------- Constants -----------------------------*/

import { laCasaDePapleQuestions } from '../data/LaCasadePapelQuestions.js';

import {bridgertonQuestions} from '../data/Bridgertonquestions.js';

import { squidGameQuestions } from '../data/SquidGamequestions.js';

import {theQueensGambitQuestions} from "../data/theQueen'sGambitQuestions.js"

/*------------------------- Variables (state) ------------------------*/
let questions; 
let score;
let correct;
let timeLeft;

/*--------------------- Cached Element References ---------------------*/

const h1 = document.querySelector('#heading');
const playBtn = document.querySelector('#play-btn');
const restartBtn = document.querySelector('#restart-btn');
const nextBtn = document.querySelector('#next-btn');
const categorizeContainer = document.querySelector('#categorize-container');
const categories = document.querySelectorAll('.cat')
const questionContainer = document.querySelector('#question-container');
const scoreContainer = document.querySelector('.score-container');
const timerContainer = document.querySelector('#timer');

/*------------------------- Event Listeners ---------------------------*/
playBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', selectRandomQuestion);
restartBtn.addEventListener('click', restartGame);
categories.forEach(function (btn) {
  btn.addEventListener('click', setCategorize)
});


/*----------------------------- Functions -----------------------------*/

restartBtn.style.display = 'none';
function startGame() {
  score = 0
  playBtn.style.display = 'none';
	h1.style.display = 'none';
	categorizeContainer.classList.remove('hide');
  nextBtn.style.display = 'none';
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
  let allAnswered = checkAllAnswered()
  if (allAnswered) {
    showScore()
  }else if (questions[idx].asked === false) {
			renderQuestion(idx);
			questions[idx].asked = true;
			questions.push();
			correct = questions[idx].correctAnswer;
			startTimer();
		
	}
}

function checkAllAnswered() {
  let allAnswered = true
  questions.forEach(question => {
    if (!question.asked) {
      allAnswered = false
    }
  })
  return allAnswered
}

function renderQuestion(idx) {
  hidePrevQuestion()
  categorizeContainer.style.display = 'none'
	const question = document.createElement('h2');
	question.innerText = questions[idx].question;
	questionContainer.appendChild(question);
  // scoreContainer.innerText = 'SCORE: '+score
console.log('question');
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
		// console.log(button);
		questionContainer.appendChild(button);
	});
}

function selectAnswer(evt) {
	if (parseInt(evt.target.id) === correct) {
    alert('Your answer is correct');
    score += 10; 
    let div = document.createElement('div')
    div.innerText = 'SCORE: ' + score;
    scoreContainer.appendChild(div)
	} else {
    alert('Your answer is wrong');
	}
}



function showScore() {
  questionContainer.innerHTML = '';
	scoreContainer.classList.remove('hide');
  restartBtn.style.display = 'block';
  playBtn.style.display = 'none'
  nextBtn.style.display = 'none'
  let h2 = document.createElement('h2')
  h2.innerText = `Your total score : ${score}`;
  scoreContainer.appendChild(h2)
  let h3 = document.createElement('h3')
  h3.innerText = `You answered : ${score / 10} out of ${questions.length} questions`;
  scoreContainer.appendChild(h3)
	
}

function restartGame() {
  location.reload()
}

function startTimer() {
    timeLeft = 15;
      setInterval(function () {
        timerContainer.textContent = timeLeft + ' seconds remaining.';
        timeLeft -= 1;
        if (timeLeft < 0) {
          timerContainer.textContent = 'Go to the next question';
        }
        
      }, 1000);
      
    
}
