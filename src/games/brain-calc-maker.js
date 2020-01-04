import { cons } from '@hexlet/pairs';
import { playGame, getNum, maxNum } from '..';

const operators = ['+', '-', '*'];

export const gameCalc = () => {
  const numOne = getNum(maxNum);
  const numTwo = getNum(maxNum);
  const operator = operators[getNum(operators.length)];
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
  playGame(gameCalc, condition);
};
