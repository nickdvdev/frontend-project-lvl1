import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const gameRounds = 3;
export const minNum = 10;
export const maxNum = 20;
export const getNum = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

export const playGame = (gameType, condition) => {
  console.log('Welcome to the Brain Games!');
  console.log(condition);
  const name = readlineSync.question('May I have your name, please?\n');
  console.log(`Hello, ${name}!`);
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
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
