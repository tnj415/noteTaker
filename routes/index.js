const express = require('express');

const savedNotesRouter = require('./savedNotes');

const app = express();

app.use('/api', savedNotesRouter);


module.exports = app;
