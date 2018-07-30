const express = require('express');
const path = require('path');
const db = require('../database/index.js');

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));

const port = process.env.PORT || 3002;

app.get('/:id', (req, res) => {
  var uid = req.params.id,
    path = req.params[0] ? req.params[0] : 'index.html';
  res.sendFile(path, {root: './client/dist'});
});

app.get('/:id/images', (req, res) => {
  db.getImages(req.params.id, (data) => {
    res.status(200).send(data.map(value => value['img_path']));
  });
});

app.get('/:id/product_info', (req, res) => {
  db.getProductInfo(req.params.id, (data) => {
    res.status(200).send(data[0]);
  });
});

/* eslint-disable no-console */
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
