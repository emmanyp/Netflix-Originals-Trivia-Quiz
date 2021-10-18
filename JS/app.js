/*---------------------------- Constants -----------------------------*/

import { laCasaDePapleQuestions } from '../data/LaCasadePapelQuestions.js';

import {bridgertonQuestions} from '../data/Bridgertonquestions.js';

import { squidGameQuestions } from '../data/SquidGamequestions.js';

import {theQueensGambitQuestions} from "../data/theQueen'sGambitQuestions.js"

/*------------------------- Variables (state) ------------------------*/

let questions; 
let score; 

/*--------------------- Cached Element References ---------------------*/

const h1 = document.querySelector('#heading');
const playBtn = document.querySelector('#play-btn');
const categorizeContainer = document.querySelector('#categorize-container');
const categories = document.querySelectorAll('.cat')
console.log(categories);

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