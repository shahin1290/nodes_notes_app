const fs = require('fs')
const getNotes = () => 'Your Notes...'

const addNotes = (title, body) => {
  const notes = []

  const notebuffer = {
    title,
    body
  }

  notes.push(notebuffer)

  const jsonNotes = JSON.stringify(notes)

  fs.writeFileSync('notes.json', jsonNotes)

}

// const readNotes = () => {

// }

module.exports = notes= {
  addNotes,
  getNotes
}