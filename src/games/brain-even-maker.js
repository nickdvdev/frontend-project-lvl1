import {
  playGame, getNum, maxNum, cons,
} from '..';

const isEven = (num) => num % 2 === 0;

export const gameEven = () => {
  const question = getNum(maxNum);
  const correctAnswer = isEven(question) === true ? 'yes' : 'no';
  return cons(question, correctAnswer);
};

const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  playGame(gameEven, condition);
};
