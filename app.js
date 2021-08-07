const fs = require('fs');

fs.writeFileSync('notes.txt', 'My name is Johnnie')
fs.appendFileSync('notes.txt', ", I'm a developer! :)")