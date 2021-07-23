const savedNotes = require('express').Router()
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

savedNotes.get('/notes', (req, res) => {

  readFromFile('./db/db.json', 'utf8').then((notes) => res.json(JSON.parse(notes)));
});

savedNotes.post('/notes', (req, res) => {

  const { title, text } = req.body;

  if (title && text) {

    const newNote = {
      title,
      text,
      id: uuidv1()
    };

    readAndAppend(newNote, './db/db.json');

    const data = {
      status: 'success',
      body: newNote,
    };

    res.json(data);
  }
  else res.json('Error in posting feedback');

});

module.exports = router;