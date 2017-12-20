const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

const app = express();

app.use(serveStatic(path.join(__dirname, 'build')));

const data = JSON.parse(fs.readFileSync('./src/data.json').toString());

app.get('/api/grudges.json', function(req, res) {
  const limit = parseInt(req.query.limit || 0, 10);
  const offset = parseInt(req.query.offset || 0, 10);

  console.log({offset, limit});

  res.json(data.slice(offset, offset + limit));
});

app.listen(8000, () => {
  console.log('The application is now running on Port 8000.');
});
