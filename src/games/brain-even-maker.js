import readlineSync from 'readline-sync';
import {
  playGame, getNum, maxNum, cons,
} from '..';

const isEven = (num) => num % 2 === 0;

export const gameEven = () => {
  const num = getNum(maxNum);
  const correctAnswer = isEven(num) === true ? 'yes' : 'no';
  const answer = (readlineSync.question(`Question: ${num}\n`));
  const result = cons(answer, correctAnswer);
  return result;
};

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  playGame(gameEven, condition);
};
