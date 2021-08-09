const fs = require('fs');
const chalk = require('chalk')

const GetNotes = () => {
    return 'Your notes...'
}

const AddNote = (title, body) => {
    const notes = LoadNotes()
    const duplicateNote = notes.find(note => note.title === title)

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        SaveNotes(notes)
    } else {
        console.log("No. Title is taken!")
    }
}

const RemoveNotes = (title) => {
    // console.log(`This is the title: ${title}`)
    const notes = LoadNotes();
    const newList = notes.filter(note => note.title !== title);

    if(notes.length > newList){
        console.log(chalk.green.inverse('Removed!'))
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }

    SaveNotes(newList)
}
const ListNotes = () => {
    console.log(chalk.inverse('Your notes!'));
    const notes = LoadNotes();

    for(const note of notes){
        console.log(chalk.blue.inverse(note.title))
    }

}

const ReadNotes = () => {

}

const SaveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const LoadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
    
}

module.exports = {
    getNotes: GetNotes,
    addNote: AddNote,
    removeNotes: RemoveNotes,
    listNotes: ListNotes,
    readNotes: ReadNotes
};