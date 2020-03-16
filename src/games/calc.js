import { cons } from '@hexlet/pairs';
import playGame from '..';
import { generateNum, minNum, maxNum } from '../utils';

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
      return false;
  }
};

const prepareCalcGame = () => {
  const numOne = generateNum(minNum, maxNum);
  const numTwo = generateNum(minNum, maxNum);
  const operator = operators[generateNum(0, operators.length - 1)];
  const correctAnswer = String(getCorrectAnswer(operator, numOne, numTwo));
  const question = `${numOne} ${operator} ${numTwo}`;
  return cons(question, correctAnswer);
};

const condition = 'What is the result of the expression?';

export default () => {
  playGame(prepareCalcGame, condition);
};
