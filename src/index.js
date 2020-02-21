import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';
import { roundsCount } from './utils';

const playGame = (chooseGameType, condition) => {
  console.log('Welcome to the Brain Games!');
  console.log(condition);
  const name = readlineSync.question('May I have your name, please?\n');
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < roundsCount; i += 1) {
    const game = chooseGameType();
    const correctAnswer = cdr(game);
    const question = car(game);
    const answer = readlineSync.question(`Question: ${question}\n`);
    console.log(`Your answer: ${answer}`);
    if (answer === correctAnswer) {
      console.log('Correct!');
    }
    if (answer !== correctAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default playGame;
