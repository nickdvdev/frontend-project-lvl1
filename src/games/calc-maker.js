import { cons } from '@hexlet/pairs';
import {
  playGame, getNum, minNum, maxNum,
} from '..';

const operators = ['+', '-', '*'];

const getCorrectAnswer = (operator, one, two) => {
  switch (operator) {
    case '-':
      return one - two;
    case '+':
      return one + two;
    case '*':
      return one * two;
    default:
      return 'Something went wrong';
  }
};

const setupCalcGame = () => {
  const numOne = getNum(minNum, maxNum);
  const numTwo = getNum(minNum, maxNum);
  const operator = operators[getNum(0, operators.length - 1)];
  const correctAnswer = String(getCorrectAnswer(operator, numOne, numTwo));
  const question = `${numOne} ${operator} ${numTwo}`;
  return cons(question, correctAnswer);
};

const condition = 'What is the result of the expression?';

export default () => {
  playGame(setupCalcGame, condition);
};
