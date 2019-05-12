const fs = require('fs')

const getNotes = function () {
    return 'Your notes...'
}

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(note => {
        return title === note.title
    })
    console.log(duplicateNotes)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        console.log(typeof JSON.parse(dataJSON) === 'object')
        return JSON.parse(dataJSON)

    } catch (err) {
        return []
    }
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,

}