const savedNotes = require('express').Router()
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const uuid = require('../helpers/uuid');

savedNotes.get('/api/notes', (req, res) => {

  if (req.body && req.params.review_id) {
    console.info(`${req.method} request received to get a single a review`);
    const reviewId = req.params.review_id;
    for (let i = 0; i < reviews.length; i++) {
      const currentReview = reviews[i];
      if (currentReview.review_id === reviewId) {
        res.json(currentReview);
        return;
      }
    }
    res.json('Review ID not found');
  }

  readFromFile('./db/db.json', 'utf8').then((notes) => res.json(JSON.parse(notes)));
});

savedNotes.post('/api/notes', (req, res) => {

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

module.exports = savedNotes;