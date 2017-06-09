'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var logger = require('morgan');
var port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client')));
app.use(logger('dev'));

app.listen(port, function () {
    console.log('Server is listening on port: ' + port);
})