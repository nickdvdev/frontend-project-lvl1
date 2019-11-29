#!/usr/bin/env node
import {
  welcome, playGame, gameGcd, gameRounds,
} from '../..';

welcome();
console.log('Find the greatest common divisor of given numbers.');
playGame(gameRounds, gameGcd);
