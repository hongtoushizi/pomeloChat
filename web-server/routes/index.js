/**
 * Created by yuan on 15/10/15.
 */
'use strict';

/**
 * Module dependencies.
 */
var base = require(__dirname + '/../controller/base.controller');
var index = require(__dirname + '/../controller/index.controller');
var express = require('express');
var app = express();
app.route('/')
    .get(index.index);

app.route('/test')
    .get(index.test);

module.exports = app;