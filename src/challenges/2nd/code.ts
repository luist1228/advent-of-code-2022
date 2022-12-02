import { readInput } from '../../utils/readInput';
const inputPath = `${__dirname}\\input.txt`;

function run(): any {
	const data = readInput(inputPath);

  const lines = data.split(/\r?\n/);
  let total = 0
	const gamesResults = lines.map((gameString) => {
    const game = gameString.split(' ').map((el) => el.trim());
    const result = gameResult(game[0], game[1]);
    total +=result
		return {game ,result};
	});
  
  return {gamesResults, total};
}

const gameResult = (oponent: string, player: string): number => {
	const oponentChoice = getOponentChoice(oponent);
	const playerChoice = getPlayerChoice(player, oponentChoice);
	const baseScore =
		playerChoice === 'scissors'
			? scissorsPoints
			: playerChoice === 'rock'
			? rockPoints
        : paperPoints;
	return getScore(oponentChoice, playerChoice) + baseScore;
};

const getOponentChoice = (choice: string): string => {
	if (choice === 'A' ) {
		return 'rock';
	}
	if (choice === 'B') {
		return 'paper';
	}
	return 'scissors';
};
//  X means you need to lose, Y means you need to end the round in a draw, 
// and Z means you need to win.Good luck!";
const getPlayerChoice = (playerChoice:string, oponent:string) => {
  if ( playerChoice === 'Y') {
		return oponent
	}
	if (playerChoice === 'Z') {
    if (oponent === 'rock')
      return 'paper'
    else if (oponent === 'paper')
      return 'scissors'
    else
      return 'rock'
  }
  
	if (oponent === 'rock')
      return 'scissors'
    else if (oponent === 'paper')
      return 'rock'
    else
      return 'paper'
}

const winPoints = 6;
const losePoints = 0;
const drawPoints = 3;
const rockPoints = 1;
const paperPoints = 2;
const scissorsPoints = 3;

const getScore = (oponent: string, player: string): number => {
  if (oponent === player) return drawPoints;
  
	if (
		(oponent === 'rock' && player === 'scissors') ||
		(oponent === 'paper' && player === 'rock') ||
		(oponent === 'scissors' && player === 'paper')
	) {
		return losePoints;
  } else {
    return winPoints
  }
};


export default run;
 