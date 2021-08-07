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

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('removing note')
    }
})

//Create a list command
yargs.command({
    command: 'list',
    describe: 'List of notes',
    handler: function () {
        console.log("Displaying list")
    }
})

//Create a read command
yargs.command({
    command: 'read',
    describe: 'Reading note',
    handler: function () {
        console.log('Reading')
    }
})

//add, remove, read, list


console.log(yargs.argv)