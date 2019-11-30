#!/usr/bin/env node
import {
  welcome, playGame, gameRounds, arithProgGame,
} from '../..';

welcome();
console.log('What number is missing in the progression?\n');
playGame(gameRounds, arithProgGame);
