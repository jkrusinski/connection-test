const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/', (req, res, next) => {

});

app.listen(9000, () => console.log('Server listening on port 9000'));
