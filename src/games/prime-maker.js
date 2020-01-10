import { cons } from '@hexlet/pairs';
import playGame from '..';
import { getNum, minNum, maxNum } from '../utils';

const isPrime = (num) => {
  if (num <= 3) {
    return num > 1;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= 0; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
};

const setupIsPrimeGame = () => {
  const question = getNum(minNum, maxNum);
  const correctAnswer = isPrime(question) === true ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  playGame(setupIsPrimeGame, condition);
};
