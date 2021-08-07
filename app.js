const chalk = require('chalk');
const yargs = require('yargs');
const message = require('./notes');

//customize yargs version
yargs.version('1.1.0');

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log("Adding a note!")
    }
})

//add, remove, read, list


console.log(yargs.argv)