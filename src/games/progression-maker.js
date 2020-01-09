import { cons } from '@hexlet/pairs';
import {
  playGame, getNum, minNum, maxNum,
} from '..';

const length = 10;
const difference = getNum(minNum, maxNum);

const setupArithProgGame = () => {
  const startPoint = getNum(minNum, maxNum);
  const progression = [];
  const hidden = getNum(progression.length, length);
  let question = `${progression}`;
  for (let i = 0; i < length; i += 1) {
    progression.push(startPoint + (difference * i));
    if (i !== hidden) {
      question = `${question} ${progression[i]}`;
    }
    if (i === hidden) {
      question = `${question} ..`;
    }
  }
  const correctAnswer = `${progression[hidden]}`;
  return cons(question, correctAnswer);
};

const condition = 'What number is missing in the progression?';

export default () => {
  playGame(setupArithProgGame, condition);
};
