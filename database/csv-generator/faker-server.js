const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fakerSchema = require('./faker-schema.js');

const app = express();

app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json());

const port = process.env.PORT || 4000;

app.get('/faker', (req, res) => {
  console.log(fakerSchema);
  res.status(200).send(fakerSchema);
});

/* eslint-disable no-console */
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
