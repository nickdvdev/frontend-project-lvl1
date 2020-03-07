import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';
import { roundsCount } from './utils';

const playGame = (prepareGameData, condition) => {
  console.log('Welcome to the Brain Games!');
  console.log(condition);
  const name = readlineSync.question('May I have your name, please?\n');
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < roundsCount; i += 1) {
    const gameData = prepareGameData();
    const correctAnswer = cdr(gameData);
    const question = car(gameData);
    const answer = readlineSync.question(`Question: ${question}\n`);
    console.log(`Your answer: ${answer}`);
    if (answer !== correctAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default playGame;
