const axios = require('axios');
const moment = require('moment-timezone');
const path = require('path');
const fs = require('fs');

require('dotenv').config();

const { ID, HOST } = process.env;
const LOG_PATH = path.resolve(__dirname, './local.log');

const append = (message) => new Promise((resolve, reject) => {
  fs.appendFile(LOG_PATH, `${message}\n`, (err) => {
    if (err) {
      console.log(err); // don't reject, just log
    }
    resolve(); // always resolve
  });
});

const getTime = () => moment().tz('America/Chicago').toString();

setInterval(() => {
  axios
    .post(`${HOST}/${ID}`)
    .then(() => append(`${getTime()} - Connected`))
    .catch(() => append(`${getTime()} - OFFLINE`));
}, 1000 * 60);
