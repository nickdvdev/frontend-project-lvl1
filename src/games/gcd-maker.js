import { cons } from '@hexlet/pairs';
import playGame from '..';
import { generateNum, minNum, maxNum } from '../utils';

const findGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGcd(b, a % b);
};

const prepareGcdGame = () => {
  const numOne = generateNum(minNum, maxNum);
  const numTwo = generateNum(minNum, maxNum);
  const correctAnswer = String(findGcd(numOne, numTwo));
  const question = `${numOne} ${numTwo}`;
  return cons(question, correctAnswer);
};

const condition = 'Find the greatest common divisor of given numbers.';

export default () => {
  playGame(prepareGcdGame, condition);
};
