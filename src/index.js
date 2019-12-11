import readlineSync from 'readline-sync';

export const gameRounds = 3;
const maxNum = 10;
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
  const answer = readlineSync.question(`Question: ${numOne} ${strOperator} ${numTwo}\n`);
  const result = cons(answer, correctAnswer);
  return result;
};

const findGcd = (a, b) => {
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
    return 2 * findGcd(a / 2, b / 2);
  }
  if (a % 2 === 0 && b % 2 !== 0) {
    return findGcd(a / 2, b);
  }
  if (a % 2 !== 0 && b % 2 === 0) {
    return findGcd(a, b / 2);
  }
  if (a % 2 !== 0 && b % 2 !== 0) {
    if (a > b) {
      return findGcd((a - b) / 2, b);
    }
    return findGcd((b - a) / 2, a);
  }
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

export const isPrimeGame = () => {
  const num = getNum(maxNum);
  const isPrime = (n) => {
    if (n <= 3) {
      return n > 1;
    }
    if (n % 2 === 0 || n % 3 === 0) {
      return false;
    }
    for (let i = 5; i * i <= 0; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  };
  const correctAnswer = isPrime(num) === true ? 'yes' : 'no';
  const answer = readlineSync.question(`Question: ${num}\n`);
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

export const playBrainGame = () => {
  welcome();
  greet();
};

export const playBrainEven = () => {
  welcome();
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
  playGame(gameRounds, gameEven);
};

export const playBrainCalc = () => {
  welcome();
  console.log('What is the result of the expression?');
  playGame(gameRounds, gameCalc);
};

export const playBrainGcd = () => {
  welcome();
  console.log('Find the greatest common divisor of given numbers.');
  playGame(gameRounds, gameGcd);
};

export const playBrainProgression = () => {
  welcome();
  console.log('What number is missing in the progression?\n');
  playGame(gameRounds, arithProgGame);
};

export const playBrainPrime = () => {
  welcome();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  playGame(gameRounds, isPrimeGame);
};
