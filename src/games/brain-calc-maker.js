import readlineSync from 'readline-sync';
import {
  playGame, getNum, maxNum, cons,
} from '..';

export const gameCalc = () => {
  const numOne = getNum(maxNum);
  const numTwo = getNum(maxNum);
  const operator = getNum(3);
  let strOperator = '';
  const getCorrectAnswer = () => {
    if (operator === 0) {
      strOperator = '-';
      return numOne - numTwo;
    }
    if (operator === 1) {
      strOperator = '+';
      return numOne + numTwo;
    }
    strOperator = '*';
    return numOne * numTwo;
  };
  const correctAnswer = String(getCorrectAnswer());
  const answer = readlineSync.question(`Question: ${numOne} ${strOperator} ${numTwo}\n`);
  const result = cons(answer, correctAnswer);
  return result;
};

const condition = 'What is the result of the expression?';

export default () => {
  playGame(gameCalc, condition);
};
