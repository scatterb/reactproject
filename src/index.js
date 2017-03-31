import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './Navbar';
import * as Content from './Content';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <Navbar />,
  document.getElementById('header')
);

ReactDOM.render(
  <Content.Content />,
  document.getElementById('content')
);