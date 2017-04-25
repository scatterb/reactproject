import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ReactPaint from 'react-paint';
import Playlister from './Playlister';
import Muistilista from './Muistilista';
import Ristinolla from './Ristinolla';
import * as Paintti from './Paintti';
import './index.css';

ReactDOM.render(
  <Paintti.Paintter/>,
  document.getElementById('paintti')
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <Playlister />,
  document.getElementById('picker')
);

ReactDOM.render(
  <Muistilista />,
  document.getElementById('lista')
);

ReactDOM.render(
  <Ristinolla />,
  document.getElementById('ristinolla')
);