import {
  playGame, getNum, maxNum, cons,
} from '..';

const lengthOfArray = 10;

export const arithProgGame = () => {
  const arr = [getNum(maxNum)];
  const hiddenNum = getNum(lengthOfArray);
  let question = '';
  for (let i = 0; i < lengthOfArray; i += 1) {
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
