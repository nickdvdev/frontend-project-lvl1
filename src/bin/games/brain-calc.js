#!/usr/bin/env node
import {
  welcome, gameRounds, playGame, gameCalc,
} from '../..';

welcome();
console.log('What is the result of the expression?');
playGame(gameRounds, gameCalc);
