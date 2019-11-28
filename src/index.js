import readlineSync from 'readline-sync';

export const gameRounds = 3;
const maxNum = 50;
const getNum = (max) => Math.floor(Math.random() * max);
const cons = (a, b) => (message) => {
  if (message === 'car') {
    return a;
  }
  if (message === 'cdr') {
    return b;
  }
};
const car = (pair) => pair('car');
const cdr = (pair) => pair('cdr');

export const welcome = () => console.log('Welcome to the Brain Games!');

export const greet = () => {
  const name = readlineSync.question('May I have your name, please?\n');
  console.log(`Hello, ${name}!`);
  return name;
};

export const gameEven = () => {
  const num = getNum(maxNum);
  const correctAnswer = (num % 2 === 0) === true ? 'yes' : 'no';
  const answer = (readlineSync.question(`Question: ${num}\n`));
  const result = cons(answer, correctAnswer);
  return result;
};

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
  const answer = (readlineSync.question(`Question: ${numOne} ${strOperator} ${numTwo}\n`));
  const result = cons(answer, correctAnswer);
  return result;
};

export const playGame = (rounds, gameType) => {
  const name = greet();
  for (let i = 0; i < rounds; i += 1) {
    const game = gameType();
    console.log(`Your answer: ${car(game)}`);
    if (car(game) === cdr(game)) {
      console.log('Correct!');
    }
    if (car(game) !== cdr(game)) {
      return console.log(`${car(game)} is wrong answer ;(. Correct answer was ${cdr(game)}.\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
