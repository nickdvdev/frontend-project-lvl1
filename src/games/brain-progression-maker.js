import { cons } from '@hexlet/pairs';
import {
  playGame, getNum, minNum, maxNum,
} from '..';

const array = 10;

export const arithProgGame = () => {
  const arr = [getNum(minNum, maxNum)];
  const hiddenNum = getNum(array);
  let question = '';
  for (let i = 0; i < array; i += 1) {
    arr.push(arr[0] + (2 * (i + 1)));
    if (i !== hiddenNum) {
      question = `${question} ${arr[i]}`;
    }
    if (i === hiddenNum) {
      question = `${question} ${'..'}`;
    }
  }
  const correctAnswer = `${arr[hiddenNum]}`;
  return cons(question, correctAnswer);
};

const condition = 'What number is missing in the progression?';

export default () => {
  playGame(arithProgGame, condition);
};
