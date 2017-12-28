const express = require('express');
// const open = require('open');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

const server = app.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    // open('http://localhost:${port}');
    console.log(`Listening on port ${port}`);
  }
});

app.use(express.static(path.join(__dirname, '/../dist')));