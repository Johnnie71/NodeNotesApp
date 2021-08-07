const chalk = require('chalk');
const message = require('./notes');

const command = process.argv[2];

if (command === 'add'){
    console.log('adding note')
} else if (command === 'remove'){
    console.log('Removing note!')
}