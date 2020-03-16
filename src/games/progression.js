import { cons } from '@hexlet/pairs';
import playGame from '..';
import { generateNum, minNum, maxNum } from '../utils';

const progressionLength = 10;

const makeProgression = (start, diff) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(start + (diff * i));
  }
  return progression;
};

const prepareProgressionGame = () => {
  const startPoint = generateNum(minNum, maxNum);
  const difference = generateNum(minNum, maxNum);
  const progression = makeProgression(startPoint, difference);
  const hiddenNumberIndex = generateNum(0, progressionLength - 1);
  let question = '';
  for (let i = 0; i < progressionLength; i += 1) {
    question = i === hiddenNumberIndex
      ? `${question}.. `
      : `${question}${progression[i]} `;
  }
  const correctAnswer = progression[hiddenNumberIndex].toString();
  return cons(question.trim(), correctAnswer);
};

const condition = 'What number is missing in the progression?';

export default () => {
  playGame(prepareProgressionGame, condition);
};
