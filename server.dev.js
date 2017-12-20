const fs = require('fs');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

process.env.NODE_ENV = 'development';

const app = express();
const config = require('./config/webpack.config.dev.js');
const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    compress: true,
    clientLogLevel: 'none',
    hot: true,
    publicPath: config.output.publicPath,
    stats: {
      colors: true,
    },
    watchContentBase: true,
    watchOptions: {
      ignored: /node_modules/,
    },
  }),
);

const data = JSON.parse(fs.readFileSync('./src/data.json').toString());

app.get('/api/grudges.json', function(req, res) {
  const limit = parseInt(req.query.limit || 0, 10);
  const offset = parseInt(req.query.offset || 0, 10);

  console.log({offset, limit});

  res.json(data.slice(offset, offset + limit));
});

// Serve the files on port 3000.
app.listen(3000, function() {
  console.log('Grudge Bin is running on Port 3000! 😼\n');
});
