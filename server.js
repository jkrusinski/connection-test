const express = require('express');
const moment = require('moment-timezone');
const path = require('path');
const fs = require('fs');

const app = express();

app.post('/:id', (req, res, next) => {
  const { id } = req.params;
  const logPath = path.resolve(__dirname, `./${id}.log`);
  const message = `${moment().tz('America/Chicago').toString()} - Checked In\n`;

  fs.appendFile(logPath, message, (err) => {
    if (err) {
      console.log(err);
    }

    res.send();
  });
});

app.listen(9000, () => console.log('Server listening on port 9000'));
