import { cons } from '@hexlet/pairs';
import playGame from '..';
import { getNum, minNum, maxNum } from '../utils';

const findGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGcd(b, a % b);
};

const prepareGcdGame = () => {
  const numOne = getNum(minNum, maxNum);
  const numTwo = getNum(minNum, maxNum);
  const correctAnswer = String(findGcd(numOne, numTwo));
  const question = `${numOne} ${numTwo}`;
  return cons(question, correctAnswer);
};

const condition = 'Find the greatest common divisor of given numbers.';

export default () => {
  playGame(prepareGcdGame, condition);
};
