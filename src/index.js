import React from 'react';
import ReactDOM from 'react-dom';
import {App, Navbar} from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <Navbar />,
  document.getElementById('header')
);