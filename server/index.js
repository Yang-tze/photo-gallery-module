require('newrelic');
const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('../database/index.js');
const bodyParser = require('body-parser');
const cluster = require('cluster');

if (cluster.isMaster) {
  var _cpus = require('os').cpus().length;
  // create a worker for each CPU
  for (var i = 0; i < _cpus; i += 1) {
      cluster.fork();
  }
  // When a worker dies create another one
  cluster.on('exit', function(worker) {
    console.log('worker ' + worker.id +  ' died');
    cluster.fork();
  });
} else {

  const app = express();
  app.use(bodyParser.json());

  app.use(cors());
  app.use(express.static(path.join(__dirname, '/../client/dist')));

  const port = process.env.PORT || 3002;

  app.get('/:id', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, '../client/dist') });
  });

  // app.get('/images/:id/images', (req, res) => {
  //   db.getImages(req.params.id, (data) => {
  //     data = data.rows;
  //     res.status(200).send(data.map(value => value.img_url));
  //   });
  // });

  app.get('/images/:id/product_info', (req, res) => {
    db.getProductInfo(req.params.id, (data) => {
      let result = {};
      result.name = data[0].name;
      result.details = data[0].details;
      result.images = data.map(value => value.img_url);
      res.status(200).send(result);
    });
  });

  app.post('/images/add_product', (req, res) => {
    db.addProduct(req.body, data => {
      res.status(201).send(data);
    });
  });

  app.post('/images/add_image', (req, res) => {
    db.addImage(req.body, data => {
      res.status(201).send(data);
    });
  });

  app.put('/images/update_product', (req, res) => {
    db.updateProduct(req.body, data => {
      res.status(201).send(data);
    });
  });

  app.delete('/images/delete_product', (req, res) => {
    db.deleteProduct(req.body, data => {
      res.status(204).send(data);
    });
  });

  /* eslint-disable no-console */
  app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
  });
}
