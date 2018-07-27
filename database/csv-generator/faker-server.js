const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fakerSchema = require('./faker-schema.js');
const fs = require('fs');

const app = express();

app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json());

const port = process.env.PORT || 4000;

const spl = ','

app.post('/faker', (req, res) => {
  let data = [];
  for(var i = 0; i < 100; i++) {
    data.push(fakerSchema(6, 100));
  }
  let csved = getKeys(data)+handleData(data);
  console.log();
  fs.writeFile(path.join(__dirname,'../data.csv'), csved, 'utf8', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
  res.status(201).send();
});

var getKeys = (data) => {
  let arr = [];
  for(var key in data[0]) {
    if(key !== 'image') {
      arr.push(key);
    }
  }
  return arr.join(spl)+'\n';
}

var handleData = (data) => {
  let result = "";
  for(var i in data) {
    let arr = [];
    for(var key in data[i]) {
      if(key !== 'image') {
        arr.push(data[i][key]);
      }
    }
    result += arr.join(spl)+'\n';
  }
  return result;
};

/* eslint-disable no-console */
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
