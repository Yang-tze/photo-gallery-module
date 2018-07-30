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
  fs.writeFile(path.join(__dirname,'../products.csv'), getProducts(data), 'utf8', (err) => {
    if (err) throw err;
    console.log('The products file has been saved!');
  });
  fs.writeFile(path.join(__dirname,'../product_images.csv'), getProductImages(data), 'utf8', (err) => {
    if (err) throw err;
    console.log('The images file has been saved!');
  });
  fs.writeFile(path.join(__dirname,'../images.csv'), getImages(100), 'utf8', (err) => {
    if (err) throw err;
    console.log('The images file has been saved!');
  });
  res.status(201).send();
});

const getProducts = (data) => {
  let result = "";
  for(var i in data) {
    let arr = [];
    for(var key in data[i]) {
      if(key !== 'image') {
        arr.push(data[i][key]);
      }
    }
    result += (JSON.parse(i)+1)+spl+arr.join(spl)+'\n';
  }
  return result;
};

const getProductImages = (data) => {
  let result = "";
  let count = 1;
  for(var i in data) {
    for(var img of data[i]['image']) {
      let arr = [JSON.parse(i)+1, img];
      result += (count++)+spl+arr.join(spl)+'\n';
    }
  }
  return result;
}

const getImages = (totImages) => {
  let result = "";
  for(var i = 1; i <= totImages; i++) {
    result += i+spl+`${i}.jpg\n`;
  }
  return result;
}

/* eslint-disable no-console */
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
