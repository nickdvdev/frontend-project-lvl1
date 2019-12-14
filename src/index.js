import readlineSync from 'readline-sync';

export const gameRounds = 3;
const maxNum = 10;
const getNum = (max) => Math.floor(Math.random() * max);
const isEven = (num) => num % 2 === 0;
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

export const gameEven = () => {
  const num = getNum(maxNum);
  const correctAnswer = isEven(num) === true ? 'yes' : 'no';
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
  const answer = readlineSync.question(`Question: ${numOne} ${strOperator} ${numTwo}\n`);
  const result = cons(answer, correctAnswer);
  return result;
};

const findGcd = (a, b) => {
  let result;
  if (a === 0) {
    return b;
  }
  if (b === 0 || a === b) {
    return a;
  }
  if (a === 1 || b === 1) {
    return 1;
  }
  if (a % 2 === 0 && b % 2 === 0) {
    result = 2 * findGcd(a / 2, b / 2);
  }
  if (a % 2 === 0 && b % 2 !== 0) {
    result = findGcd(a / 2, b);
  }
  if (a % 2 !== 0 && b % 2 === 0) {
    result = findGcd(a, b / 2);
  }
  if (a % 2 !== 0 && b % 2 !== 0) {
    result = a > b ? findGcd((a - b) / 2, b) : findGcd((b - a) / 2, a);
  }
  return result;
};

export const gameGcd = () => {
  const numOne = getNum(maxNum);
  const numTwo = getNum(maxNum);
  const correctAnswer = String(findGcd(numOne, numTwo));
  const answer = readlineSync.question(`Question: ${numOne} ${numTwo}\n`);
  const result = cons(answer, correctAnswer);
  return result;
};

export const arithProgGame = () => {
  const lengthOfArray = 10;
  const arr = [getNum(maxNum)];
  let question = '';
  const hiddenNum = getNum(lengthOfArray);
  for (let i = 0; i < lengthOfArray; i += 1) {
    arr.push(arr[0] + (2 * (i + 1)));
    if (i !== hiddenNum) {
      question += ` ${arr[i]}`;
    }
    if (i === hiddenNum) {
      question += ' ..';
    }
  }
  const correctAnswer = `${arr[hiddenNum]}`;
  const answer = readlineSync.question(`Question:${question}\n`);
  const result = cons(answer, correctAnswer);
  return result;
};

const isPrime = (num) => {
  if (num <= 3) {
    return num > 1;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= 0; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
};

export const isPrimeGame = () => {
  const num = getNum(maxNum);
  const correctAnswer = isPrime(num) === true ? 'yes' : 'no';
  const answer = readlineSync.question(`Question: ${num}\n`);
  const result = cons(answer, correctAnswer);
  return result;
};

export const playGame = (rounds, gameType) => {
  const name = readlineSync.question('May I have your name, please?\n');
  console.log(`Hello, ${name}!`);
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
