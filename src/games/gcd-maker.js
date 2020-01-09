import { cons } from '@hexlet/pairs';
import {
  playGame, getNum, minNum, maxNum,
} from '..';

const findGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGcd(b, a % b);
};

const playGcdGame = () => {
  const numOne = getNum(minNum, maxNum);
  const numTwo = getNum(minNum, maxNum);
  const correctAnswer = String(findGcd(numOne, numTwo));
  const question = `${numOne} ${numTwo}`;
  return cons(question, correctAnswer);
};

const condition = 'Find the greatest common divisor of given numbers.';

export default () => {
  playGame(playGcdGame, condition);
};
