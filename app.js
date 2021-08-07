const validator = require('validator')
const message = require('./notes');

const mes = message();

console.log(validator.isEmail('example.com'));