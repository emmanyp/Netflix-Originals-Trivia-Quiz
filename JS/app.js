/*---------------------------- Constants -----------------------------*/




/*------------------------- Variables (state) ------------------------*/




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



/*----------------------------- Functions -----------------------------*/

function startGame() {
  playBtn.style.display = 'none';
	h1.style.display = 'none';
	categorizeContainer.classList.remove('hide');
}
