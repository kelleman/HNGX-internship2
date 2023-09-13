// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
require('dotenv').config();

const db = require('./db/connectDb');
const personRoutes = require('./routes/personRoute');

app.use(bodyParser.json());

app.use(personRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
