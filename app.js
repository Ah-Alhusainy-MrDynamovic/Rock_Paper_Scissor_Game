"strick mode";
// ========================
const startGameBtn = document.getElementById('start-game-btn');
const ROCK= "ROCK";
const PAPER="PAPER"
const SCISSORS= "SCISSORS"
const DEFAULT_USER_CHOICE= ROCK
// For making sure that wehen we start a game we can't start another one 
let gameIsRunning= false;
// Convent Indifiers to Global varibales 
const DRAW_STATUS= "You have a draw *_^";
const PLAYER_STATUS_WINS= "Player is the  winner"
const COMPTUER_STATUS_WINS= "Computer is the winner"


const getPlayerChocie = function() {
	let selection= prompt(`${ROCK} , ${PAPER} or ${SCISSORS}`, "").toUpperCase()
	if (selection!== ROCK && selection!==PAPER && selection!==SCISSORS) {
		alert(`In valid Choice! , We chose ${DEFAULT_USER_CHOICE} for you!`)
		selection = DEFAULT_USER_CHOICE
		return selection
	} else {
		return selection
	}
}
const getComputerChoice= function() {
	const pCValue= Math.random()
	if (pCValue>0.33) {
		console.log("PC VAlue Is ", pCValue);
		return ROCK
	} else if (pCValue > 0.65) {
		console.log("PC VAlue Is ", pCValue);
		return PAPER
	} else {
		console.log("PC VAlue Is ", pCValue);
		return SCISSORS
	}
	
}

const determineWiners =  function (pChoice,cChoice) {	
	if (pChoice===cChoice) {
		return DRAW_STATUS;
	} 
	else if ( cChoice==ROCK && pChoice == PAPER || 
		cChoice == PAPER && pChoice == SCISSORS || 
		cChoice==SCISSORS && pChoice ==ROCK ) {
			return PLAYER_STATUS_WINS;
		}
	else {
			return COMPTUER_STATUS_WINS;
		}
}

startGameBtn.addEventListener('click', function() {
// For making sure that wehen we start a game we can't start another one 
	if (gameIsRunning) { //line 9
		console.log("Game is already running, we can't start a nother one");
		return
	}
	gameIsRunning= true
  console.log('Game is starting...');
	const playerSelection= getPlayerChocie()
	console.log("pChoice",playerSelection);
	const cChoice= getComputerChoice()
	console.log('cChoice: ', cChoice);
	const winner= determineWiners(playerSelection,cChoice)
	let message= ` you picked ${playerSelection} and computer picked ${cChoice}, Therefore you  `
	if (winner === DRAW_STATUS ) {
		message += ` had a draw`
	}
	else if ( winner === PLAYER_STATUS_WINS){
		message += ` are the winner`
	}
	else if (winner === COMPTUER_STATUS_WINS) {
		message+= ` are the loser`
	}
	alert(message)
	gameIsRunning = false
});