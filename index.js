const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const fs = require('fs');

app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res) => {
  fs.readFile('output.txt', 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.send(data);
  });
});

app.listen(process.env.PORT || 4000);
