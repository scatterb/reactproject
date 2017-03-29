import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

const makers = ['Henri', 'Jussi', 'Matias', 'Santeri'];


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul>
          {makers.map(function(maker, i) {
            return getMakerPages(maker, i)
          })}
        </ul>
      </div>
    );
  }
}

function getMakerPages(maker, i) {
  return <a href={i}><li>{maker}</li></a>;
}

//export default App;
export { App, Navbar };
