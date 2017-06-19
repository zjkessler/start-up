'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client')));
app.use(logger('dev'));

app.listen(port, () => {
    console.log('Server is listening on port: ' + port);
});