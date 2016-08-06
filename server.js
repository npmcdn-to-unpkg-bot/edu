/*eslint no-console:0 */
/*'use strict';
require('core-js/fn/object/assign');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');

new WebpackDevServer(webpack(config), config.devServer)
.listen(config.port, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:' + config.port);
  console.log('Opening your system browser...');
  open('http://localhost:' + config.port + '/webpack-dev-server/');
});*/

var gzippo = require('gzippo');
  var express = require('express');
  var app = express();
 
  app.use(express.logger('dev'));
  app.use(gzippo.staticGzip("" + __dirname + "/dist"));
  app.listen(process.env.PORT || 5000);
