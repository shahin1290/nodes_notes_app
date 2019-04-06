const yargs = require('yargs')
const notes = require('./notes')

yargs.command({
  command: 'list',
  describe: 'Listing all the notes',
  handler: function(){
    notes.listNotes()
  }
})

yargs.command({
  command: 'read',
  describe: 'Read a single note',
  builder: {
    title:{
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: argv => notes.readNote(argv.title)
})

yargs.command({
  command: 'add',
  describe: 'Adding the note to the notes collection',
  builder: {
    title:{
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Description of the note', 
      demandOption: true,
      type: 'string'
    }
  },
  handler: argv => notes.addNotes(argv.title, argv.body)
})

yargs.command({
  command: 'delete',
  describe: 'Removing a note from the notes collection',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: argv => notes.deleteNotes(argv.title)
})

yargs.parse()