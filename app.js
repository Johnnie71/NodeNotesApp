const chalk = require('chalk');
const message = require('./notes');

const mes = message();

console.log(chalk.inverse.magenta('Success!'));