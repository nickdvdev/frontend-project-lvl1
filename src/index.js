import readlineSync from 'readline-sync';

export const gameRounds = 3;
const maxNum = 1000;

export const greet = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
  const name = readlineSync.question('May I have your name, please?\n');
  console.log(`Hello, ${name}!`);
  return name;
};

const generateRandomNum = (max) => Math.floor(Math.random() * max);

export const gameIsEven = (times) => {
  const name = greet();
  for (let i = 0; i < times; i += 1) {
    const question = generateRandomNum(maxNum);
    const correctAnswer = (question % 2 === 0) === true ? 'yes' : 'no';
    const answer = (readlineSync.question(`Question: ${question}\n`));
    console.log(`Your answer: ${answer}`);
    if (answer === correctAnswer) {
      console.log('Correct!');
    }
    if (answer !== correctAnswer) {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
