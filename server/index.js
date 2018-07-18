const express = require('express');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

let port = 3002;

app.listen(port, function() {
  console.log(`Listening on port ${port}...`);
});
