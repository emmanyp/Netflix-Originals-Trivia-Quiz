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


/*------------------------- Event Listeners ---------------------------*/

playBtn.addEventListener('click', startGame);

sGameBtn.addEventListener('click', () => {
  console.log(getRandomSquidGameQuestions());
})
bridgertonBtn.addEventListener('click', () => {
  console.log(getRandomBridgertonQuestions());
})
tqgBtn.addEventListener('click', () => {
  console.log(getRandomTheQueensGambitQuestions());
})
lcdpBtn.addEventListener('click', () => {
  console.log(getRandomLcdpQuestions());
})


/*----------------------------- Functions -----------------------------*/

function startGame() {
  playBtn.style.display = 'none';
	h1.style.display = 'none';
	categorizeContainer.classList.remove('hide');
}

