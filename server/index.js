const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('../database/index.js');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '/../client/dist')));

const port = process.env.PORT || 3002;

app.get('/:id', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../client/dist') });
});

app.get('/images/:id/images', (req, res) => {
  db.getImages(req.params.id, (data) => {
    res.status(200).send(data.map(value => value.img_path));
  });
});

app.get('/images/:id/product_info', (req, res) => {
  db.getProductInfo(req.params.id, (data) => {
    res.status(200).send(data[0]);
  });
});

/* eslint-disable no-console */
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
