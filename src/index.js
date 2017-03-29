import React from 'react';
import ReactDOM from 'react-dom';
import * as App from './App';
import './index.css';

ReactDOM.render(
  <App.App />,
  document.getElementById('root')
);

ReactDOM.render(
  <App.Navbar />,
  document.getElementById('header')
);

ReactDOM.render(
  <App.Content />,
  document.getElementById('content')
);