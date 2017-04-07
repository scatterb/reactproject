import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as Content from './Content';
import Matias from './Matias';
import Santeri from './Santeri';
import Jussi from './Jussi';
import Henri from './Henri';
import './App.css';

const makers = ['Jussi', 'Henri', 'Matias', 'Santeri'];

const makerPaths = {
  'Matias': Matias,
  'Henri': Henri,
  'Jussi': Jussi,
  'Santeri': Santeri
};

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          {makers.map(function (maker, i) {
            return getMakerPages(maker, i)
          })}
        </ul>
      </div>
    );
  }
}

function getMakerPages(maker, i) {
  return <li onClick={getContent.bind(maker)} key={i}>{maker}</li>;
  //return <li>{maker}</li>;
}

/*function getContent(e) {
  ReactDOM.render(
    <AuthorContent name={this} />,
    document.getElementById('content')
  );
}*/

function getContent(e) {
  var maker = makerPaths[this];
  ReactDOM.render(
    React.createElement(maker, {}),
    document.getElementById('content')
  );
}


class AuthorContent extends Component {
  render() {
    return (
      <div className="content">
        <p>
          {this.props.name}
        </p>
      </div>
    );
  }
}