const fs = require('fs');

const GetNotes = () => {
    return 'Your notes...'
}

const AddNote = (title, body) => {
    const notes = LoadNotes()

    notes.push({
        title: title,
        body: body
    })

    SaveNotes(notes)
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
    addNote: AddNote
};