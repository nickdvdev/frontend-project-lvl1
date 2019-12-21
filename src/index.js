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
      const correctAnswer = cdr(game);
      const question = car(game);
      const answer = readlineSync.question(`Question: ${question}\n`);
      console.log(`Your answer: ${answer}`);
      if (answer === correctAnswer) {
        console.log('Correct!');
      }
      if (answer !== correctAnswer) {
        return console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`);
      }
    }
    return console.log(`Congratulations, ${name}!`);
  }
};
