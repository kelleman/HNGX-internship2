// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const db = require('./db');
const personRoutes = require('./routes/personRoutes');

app.use(bodyParser.json());

app.use(personRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
