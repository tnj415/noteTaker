const router = require('express').Router()
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

router.get('/notes', (req, res) => {

    readFromFile('./db/db.json', 'utf8').then((notes) => res.json(JSON.parse(notes)));

});

router.post('/notes', (req, res) => {

  const { title, text } = req.body;

  if (title && text) {

    const newNote = {
      title,
      text,
      id: uuid()
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