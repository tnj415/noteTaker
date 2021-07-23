const router = require('express').Router()
const path = require('path');
  
  // "/notes" responds with the notes.html file
 router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

router.get('*', (req, res) => {
 //send to 404 page
  });

  module.exports = router;