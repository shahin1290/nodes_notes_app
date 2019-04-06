const fs = require('fs')
const chalk = require('chalk');

const readNote = title => {
  const notes = loadNotes()

  const findNote = notes.find(note => note.title === title)

  if(findNote){
    console.log(chalk.bold.green(title))
    console.log(`${findNote.body}`)
  }else{
    console.log(chalk.red('No note found'))
  }
}

const addNotes = (title, body) => {
  const notes = loadNotes()

  const duplicateNote = notes.find(note => note.title === title)

  if(!duplicateNote){
    notes.push({
      title,
      body
    })
    saveNotes(notes)
    console.log('New note added')
  }else {
    console.log('Title is already used')
  }
}

const deleteNotes = (title) => {
  const notes = loadNotes()

  const notesLeft = notes.filter(note => note.title !== title)

  if(notesLeft.length === notes.length){
    console.log(chalk.bgRed.bold('Title did not match'))
  }else {
    saveNotes(notesLeft)
    console.log(chalk.bgGreen.bold(`Note with title: ${title} is deleted`))
  }
}

const listNotes = () => {
  console.log(chalk.inverse('Your Notes:'))
  const notes = loadNotes()
  notes.forEach(note => console.log(note.title))
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes) 
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch(e){
    return []
  }
}

module.exports = notes= {
  addNotes,
  deleteNotes,
  listNotes,
  readNote
}