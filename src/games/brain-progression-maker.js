import { cons } from '@hexlet/pairs';
import {
  playGame, getNum, minNum, maxNum,
} from '..';

const length = 10;
const difference = 2;

const playArithProgGame = () => {
  const progression = [getNum(minNum, maxNum)];
  const hidden = getNum(progression.length, length);
  let question = `${progression}`;
  for (let i = 1; i <= length; i += 1) {
    progression.push(progression[0] + (difference * i));
    if (i !== hidden) {
      question = `${question} ${progression[i]}`;
    }
    if (i === hidden) {
      question = `${question} ${'..'}`;
    }
  }
  const correctAnswer = `${progression[hidden]}`;
  return cons(question, correctAnswer);
};

const condition = 'What number is missing in the progression?';

export default () => {
  playGame(playArithProgGame, condition);
};
