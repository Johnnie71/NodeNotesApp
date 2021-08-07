const validator = require('validator')
const message = require('./notes');

const mes = message();

console.log(validator.isURL('https://google.com'));