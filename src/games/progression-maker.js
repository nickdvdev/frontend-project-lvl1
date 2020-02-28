import { cons } from '@hexlet/pairs';
import playGame from '..';
import { generateNum, minNum, maxNum } from '../utils';

const progressionLength = 10;

const makeProgression = () => {
  const progression = [];
  const difference = generateNum(minNum, maxNum);
  const startPoint = generateNum(minNum, maxNum);
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startPoint + (difference * i));
  }
  return progression;
};

const prepareArithProgGame = () => {
  const progression = makeProgression(progressionLength);
  const indexOfHiddenNum = generateNum(0, progressionLength - 1);
  let question = '';
  for (let i = 0; i < progression.length; i += 1) {
    if (i !== indexOfHiddenNum) {
      question = `${question}${progression[i]} `;
    }
    if (i === indexOfHiddenNum) {
      question = `${question}.. `;
    }
  }
  const correctAnswer = progression[indexOfHiddenNum].toString();
  return cons(question, correctAnswer);
};

const condition = 'What number is missing in the progression?';

export default () => {
  playGame(prepareArithProgGame, condition);
};
