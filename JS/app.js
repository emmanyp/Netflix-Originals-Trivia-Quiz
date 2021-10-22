/*---------------------------- Constants -----------------------------*/
const netflixIntro = new Audio('../audio/Netflix-Intro-Sound-Effect.mp3')
import { laCasaDePapleQuestions } from '../data/LaCasadePapelQuestions.js';

import {bridgertonQuestions} from '../data/Bridgertonquestions.js';

import { squidGameQuestions } from '../data/SquidGamequestions.js';

import {theQueensGambitQuestions} from "../data/theQueen'sGambitQuestions.js"
/*------------------------- Variables (state) ------------------------*/
let questions; 
let score;
let correct;
let timeLeft;
let SQgameUrl =
	'https://www.hellokpop.com/wp-content/uploads/2021/08/Squid-Game-Main-Poster.jpg';

let tqgUrl =
	'https://assets.fontsinuse.com/static/use-media-items/135/134464/full-2160x1080/604cc48d/QueensGambit_02.png';

let lcdpUrl =
	'https://static.wikia.nocookie.net/money-heist/images/1/18/Money_Heist_Part_2_poster.jpg';

let bridgUrl =
	'https://static.wikia.nocookie.net/bridgerton/images/2/27/Bridgerton_%28TV%29.jpg';


/*--------------------- Cached Element References ---------------------*/

const h1 = document.querySelector('#heading');
const playBtn = document.querySelector('#play-btn');
const restartBtn = document.querySelector('#restart-btn');
const nextBtn = document.querySelector('#next-btn');
const categorizeContainer = document.querySelector('#categorize-container');
const categories = document.querySelectorAll('.cat')
const body = document.querySelector('body');
const questionContainer = document.querySelector('#question-container');
const scoreContainer = document.querySelector('.score-container');
const timerContainer = document.querySelector('#timer');
const img = document.createElement('img');
const src = document.getElementById('images');

/*------------------------- Event Listeners ---------------------------*/
playBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', restartGame);
categories.forEach(function (btn) {
  btn.addEventListener('click', setCategorize)
});
nextBtn.addEventListener('click', selectRandomQuestion);


/*----------------------------- Functions -----------------------------*/

restartBtn.style.display = 'none';
function startGame() {
  score = 0
  body.style.background = 'black'
  playBtn.style.display = 'none';
	h1.style.display = 'none';
	categorizeContainer.classList.remove('hide');
  setTimeout(function () {
		netflixIntro.play();
	}, 1000);
}

function setCategorize(evt) {
  nextBtn.hidden = false
  if (evt.target.id === 'sgame-button') {
    questions = squidGameQuestions;
    img.src = SQgameUrl
    src.appendChild(img);
	}
	if (evt.target.id === 'bridg-button') {
    questions = bridgertonQuestions;
    img.src = bridgUrl;
		src.appendChild(img);
	}
	if (evt.target.id === 'lcdp-button') {
    questions = laCasaDePapleQuestions;
    img.src = lcdpUrl;
		src.appendChild(img);
	}
	if (evt.target.id === 'tqg-button') {
    questions = theQueensGambitQuestions;
    img.src = tqgUrl;
		src.appendChild(img);
	}
	selectRandomQuestion();
}

function selectRandomQuestion() {
  let idx = Math.floor(Math.random() * questions.length)
  let allAnswered = checkAllAnswered()
  if (allAnswered) {
    showScore()
    timerContainer.textContent = '';
  }else if(questions[idx].asked === false) {
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
	let question = document.createElement('h2');
	question.innerText = questions[idx].question;
	questionContainer.appendChild(question);
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
    button.classList.add('optionalChoice', "btn")
		button.addEventListener('click', (evt) => {
      if (parseInt(evt.target.id) === correct) {
      score += 10; 
      let div = document.createElement('div')
      scoreContainer.appendChild(div)
      // button.classList.add('correct')
    } else {
      // button.classList.add('incorrect')
      button.style.background = 'green'
    }
  });
		questionContainer.appendChild(button);
	});
}




function showScore() {
  questionContainer.innerHTML =""
	timerContainer.textContent = ""
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

// function toggleLightDark() {
// 	body.className = body.className === 'dark' ? '' : 'dark';
// }

// function checkDarkPref() {
// 	if (
// 		window.matchMedia('(prefers-color-scheme:dark)').matches &&
// 		body.className !== 'dark'
// 	) {
// 		toggleLightDark();
// 	}
// }

// checkDarkPref();
