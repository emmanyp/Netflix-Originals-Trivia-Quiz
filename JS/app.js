/*---------------------------- Constants -----------------------------*/

import {getRandomLcdpQuestions} from '../data/LaCasadePapelQuestions.js';

import {getRandomBridgertonQuestions} from "../data/Bridgertonquestions.js"

import {getRandomSquidGameQuestions} from "../data/SquidGamequestions.js"

import {getRandomTheQueensGambitQuestions} from "../data/theQueen'sGambitQuestions.js"

/*------------------------- Variables (state) ------------------------*/

const questions = []


/*--------------------- Cached Element References ---------------------*/


const h1 = document.querySelector('#heading');
const sGameBtn = document.querySelector('#sgame-button');
const bridgertonBtn = document.querySelector('#bridg-button');
const lcdpBtn = document.querySelector('#lcdp-button');
const tqgBtn = document.querySelector('#tqg-button');
const playBtn = document.querySelector('#play-btn');
const categorizeContainer = document.querySelector('#categorize-container');
const questionsContainer = document.querySelector('#question-container');
const question = document.querySelector('#question');
const choiceA = document.querySelector('#choiceA');
const choiceB = document.querySelector('#choiceB');
const choiceC = document.querySelector('#choiceC');
const choiceD = document.querySelector('#choiceD');
const feedback = document.querySelector('#feedback');

/*------------------------- Event Listeners ---------------------------*/

playBtn.addEventListener('click', startGame);

sGameBtn.addEventListener('click', function(){showQuestions('squidGame')});
bridgertonBtn.addEventListener('click', function(){showQuestions('bridgerton')})
tqgBtn.addEventListener('click', function(){showQuestions('theQueensGambit')})
lcdpBtn.addEventListener('click', function () {showQuestions('lcdp');})


/*----------------------------- Functions -----------------------------*/

function startGame() {
  playBtn.style.display = 'none';
	h1.style.display = 'none';
	categorizeContainer.classList.remove('hide');
}

function showQuestions(show) {
	categorizeContainer.style.display = 'none';
	questionsContainer.classList.remove('hide');
	let result; 
  if ( show === 'bridgerton') { 
    result = getRandomBridgertonQuestions() 
    
  } else if (show === 'squidGame') {
    result = getRandomSquidGameQuestions()
  } else if (show === 'theQueensGambit') {
    result = getRandomTheQueensGambitQuestions()
  } else if (show === 'lcdp') {
    result = getRandomLcdpQuestions(); 
  }
  console.log(result);
  question.innerText = result.question
	choiceA.innerText = result.choices[0]
	choiceB.innerText = result.choices[1]
	choiceC.innerText = result.choices[2]
	choiceD.innerText = result.choices[3]
}