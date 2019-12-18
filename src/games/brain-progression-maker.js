import readlineSync from 'readline-sync';
import {
  playGame, getNum, maxNum, cons,
} from '..';

export const arithProgGame = () => {
  const lengthOfArray = 10;
  const arr = [getNum(maxNum)];
  let question = '';
  const hiddenNum = getNum(lengthOfArray);
  for (let i = 0; i < lengthOfArray; i += 1) {
    arr.push(arr[0] + (2 * (i + 1)));
    if (i !== hiddenNum) {
      question += ` ${arr[i]}`;
    }
    if (i === hiddenNum) {
      question += ' ..';
    }
  }
  const correctAnswer = `${arr[hiddenNum]}`;
  const answer = readlineSync.question(`Question:${question}\n`);
  const result = cons(answer, correctAnswer);
  return result;
};

const condition = 'What number is missing in the progression?';

export default () => {
  playGame(arithProgGame, condition);
};
