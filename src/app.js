'use strict';

var app;
var angular         = require('angular');

var TestController  = require('./TestController');

var app = angular.module('app', []);
app.controller('TestController', TestController);