import { cons } from '@hexlet/pairs';
import { playGame, getNum, maxNum } from '..';

const findGcd = (a, b) => {
  let result;
  if (a === 0) {
    return b;
  }
  if (b === 0 || a === b) {
    return a;
  }
  if (a === 1 || b === 1) {
    return 1;
  }
  if (a % 2 === 0 && b % 2 === 0) {
    result = 2 * findGcd(a / 2, b / 2);
  }
  if (a % 2 === 0 && b % 2 !== 0) {
    result = findGcd(a / 2, b);
  }
  if (a % 2 !== 0 && b % 2 === 0) {
    result = findGcd(a, b / 2);
  }
  if (a % 2 !== 0 && b % 2 !== 0) {
    result = a > b ? findGcd((a - b) / 2, b) : findGcd((b - a) / 2, a);
  }
  return result;
};

export const gameGcd = () => {
  const numOne = getNum(maxNum);
  const numTwo = getNum(maxNum);
  const correctAnswer = String(findGcd(numOne, numTwo));
  const question = `${numOne} ${numTwo}`;
  return cons(question, correctAnswer);
};

const condition = 'Find the greatest common divisor of given numbers.';

export default () => {
  playGame(gameGcd, condition);
};
