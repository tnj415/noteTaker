const express = require('express');

const savedNotesRouter = require('./savedNotes');

const app = express();

app.use('/savedNotes', savedNotesRouter);


module.exports = app;
