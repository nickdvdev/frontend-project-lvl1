import { cons } from '@hexlet/pairs';
import {
  playGame, getNum, minNum, maxNum,
} from '..';

const isEven = (num) => num % 2 === 0;

const gameEven = () => {
  const question = getNum(minNum, maxNum);
  const correctAnswer = isEven(question) === true ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  playGame(gameEven, condition);
};
