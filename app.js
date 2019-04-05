const yargs = require('yargs')
const notes = require('./notes')

yargs.command({
  command: 'list',
  describe: 'Listing all the notes',
  handler: function(){
    console.log('Listing all the notes')
  }
})

yargs.command({
  command: 'add',
  describe: 'Adding the note',
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
  handler: function(argv){
    notes.addNotes(argv.title, argv.body)
  }
})

yargs.parse()