import readlineSync from 'readline-sync';

export const gameRounds = 3;
export const maxNum = 10;
export const getNum = (max) => Math.floor(Math.random() * max);
export const cons = (a, b) => (message) => {
  if (message === 'car') {
    return a;
  }
  if (message === 'cdr') {
    return b;
  }
};
const car = (pair) => pair('car');
const cdr = (pair) => pair('cdr');

export const playGame = (gameType, condition) => {
  console.log('Welcome to the Brain Games!');
  if (condition) {
    console.log(condition);
  }
  const name = readlineSync.question('May I have your name, please?\n');
  console.log(`Hello, ${name}!`);
  if (gameType) {
    for (let i = 0; i < gameRounds; i += 1) {
      const game = gameType();
      console.log(`Your answer: ${car(game)}`);
      if (car(game) === cdr(game)) {
        console.log('Correct!');
      }
      if (car(game) !== cdr(game)) {
        return console.log(`${car(game)} is wrong answer ;(. Correct answer was ${cdr(game)}.\nLet's try again, ${name}!`);
      }
    }
    return console.log(`Congratulations, ${name}!`);
  }
};
