import React from 'react';
import ReactDOM from 'react-dom';

import Application from './components/Application';

import './index.css';

if (process.env.NODE_ENV !== 'production') {
  const { reactopt } = require('reactopt');
  reactopt(React);
}

ReactDOM.render(<Application />, document.getElementById('root'));
