import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Playlister from './Playlister';
import Muistilista from './Muistilista';
import Ristinolla from './Ristinolla';
import './index.css';

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