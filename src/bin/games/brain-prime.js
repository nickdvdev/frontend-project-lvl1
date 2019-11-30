#!/usr/bin/env node
import {
  welcome, gameRounds, playGame, isPrimeGame,
} from '../..';

welcome();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
playGame(gameRounds, isPrimeGame);
