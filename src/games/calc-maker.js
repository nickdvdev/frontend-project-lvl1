import { cons } from '@hexlet/pairs';
import {
  playGame, getNum, minNum, maxNum,
} from '..';

const operators = ['+', '-', '*'];

const setupCalcGame = () => {
  const numOne = getNum(minNum, maxNum);
  const numTwo = getNum(minNum, maxNum);
  const operator = operators[getNum(0, operators.length - 1)];
  const getCorrectAnswer = () => {
    switch (operator) {
      case '-':
        return numOne - numTwo;
      case '+':
        return numOne + numTwo;
      case '*':
        return numOne * numTwo;
      default:
        return 'Something went wrong';
    }
  };
  const correctAnswer = String(getCorrectAnswer());
  const question = `${numOne} ${operator} ${numTwo}`;
  return cons(question, correctAnswer);
};

const condition = 'What is the result of the expression?';

export default () => {
  playGame(setupCalcGame, condition);
};
