// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();

const port = process.env.PORT|| 4040;

const db = require('./db/connectDb');
const personRoutes = require('./routes/personRoute');

app.use(bodyParser.json());

app.use('/api', personRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
