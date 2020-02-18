import { cons } from '@hexlet/pairs';
import playGame from '..';
import { getNum, minNum, maxNum } from '../utils';

const progressionLength = 10;

const makeProgression = () => {
  const progression = [];
  const difference = getNum(minNum, maxNum);
  const startPoint = getNum(minNum, maxNum);
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startPoint + (difference * i));
  }
  return progression;
};

const prepareArithProgGame = () => {
  const progression = makeProgression(progressionLength);
  const hiddenNum = getNum(0, progressionLength - 1);
  let question = '';
  for (let i = 0; i < progression.length; i += 1) {
    if (i !== hiddenNum) {
      question = `${question}${progression[i]} `;
    }
    if (i === hiddenNum) {
      question = `${question}.. `;
    }
  }
  const correctAnswer = `${progression[hiddenNum]}`;
  return cons(question, correctAnswer);
};

const condition = 'What number is missing in the progression?';

export default () => {
  playGame(prepareArithProgGame, condition);
};
