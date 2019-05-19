const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => title === note.title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse(`Note title '${title}' already taken!`))
    }
}

const removeNote = title => {
    const notes = loadNotes()
    const notesToKeep = notes.filter(note => note.title !== title)

    if (notesToKeep.length === notes.length) {
        console.log(chalk.red.inverse(`There is no note titled '${title}' to delete`))
    } else {
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse(`The note titled '${title}' has been correctly deleted.`))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.inverse('Your notes:'))
    notes.forEach(note => console.log(note.title));
}

const readNote = title => {
    const notes = loadNotes()
    const noteToRead = notes.find(note => note.title === title)
    if (noteToRead) {
        console.log(chalk.blue.inverse(noteToRead.title))
        console.log(noteToRead.body)
    } else {
        console.log(chalk.red.inverse(`There is no note titled '${title}' found `))
    }
}


const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch (err) {
        return []
    }
}


// module.exports = {
//     addNote: addNote,
//     removeNote: removeNote,
//     listNotes: listNotes,
//     readNote: readNote,
// }
module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote,
}