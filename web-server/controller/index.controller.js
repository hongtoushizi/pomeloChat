/**
 * Created by yuan on 15/10/15.
 */
'use strict';
var url = require('url');
var https = require('https');

exports.index = function (req, res, next) {
    console.log("fffffff");
    res.render('index', {
        test:"test"
    })
}

exports.test = function (req, res, next) {
    console.log("gggg000888880----");
    res.render('index', {
        test:"test"
    })
}