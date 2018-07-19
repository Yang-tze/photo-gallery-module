const express = require('express');
const db = require('./database');
const app = express();


app.use(express.static(__dirname + '/../client/dist'));

let port = 3002;

app.get('/images', (req, res) => {

});

app.listen(port, function() {
  console.log(`Listening on port ${port}...`);
});
