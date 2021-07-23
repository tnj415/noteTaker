const express = require('express');

const writeRoutes = require('./writeRoutes');
const savedNotesRouter = require('./saveRoutes');

const app = express();

app.use('/notes', savedNotesRouter);


module.exports = app;
