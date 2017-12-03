const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

const app = express();

app.use(serveStatic(path.join(__dirname, 'build')));
app.listen(8000, () => {
  console.log('The application is now running on Port 8000.');
});
