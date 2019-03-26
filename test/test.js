/*
 * Coder & programmer: Luis Sanabria
 * Copyright: (c) Arquetic.org 2019 
 * Date: March, 2019
 * GitHub: https://github.com/aleftos/billbo
 * Summary: Utilities for the national tax billing system of Bolivian country.
 * Description: Massive CUF test
*/

const chalk = require('chalk');
const jsome = require('jsome');
const log = console.log;

const test = require('./test-data');
const cuf = require('../lib/cuf');

jsome.level.show = true;

test.testData.forEach((element, i) => {
  let data = cuf.getCUF(element);
  log(chalk.blue('Data in '), i + 1 + ': ');
  jsome(element);
  log(chalk.cyan('Reference CUF:', test.referenceCUFs[i]));
  if (data.CUF === test.referenceCUFs[i]) {
    log(chalk.green('Result: CUF OK'));
  } else {
    log(chalk.red('Result: CUF NOK'));
  }
});