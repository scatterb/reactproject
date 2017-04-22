import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Tervetuloa MusaNollaan</h2>
        </div>
        <p className="App-intro">
          Valitse ensin musiikkikategoriat kuunteluiloksesi, sitten voit pienentää soittimen alla olevasta napista
        </p>
        <p className="App-intro">
          Kun olet pienentänyt soittimen, voit pelata ristinollaa, ja mikäli kuulet hyvän biisin, voit lisätä sen muistilistaan
        </p>
        <div id="toggler">
          <a href="#" onClick={togglePlayer} className="togglebutton" id="closer"></a>
        </div>
      </div>
    );
  }
}

function togglePlayer() {
  if(document.getElementById('closer')) {
    var player = document.getElementById('musamankeli');
    player.id = 'musamankelihidden';
    document.getElementById('closer').id = 'opener';
  } else {
    var player = document.getElementById('musamankelihidden');
    player.id = 'musamankeli';
    document.getElementById('opener').id = 'closer';
  }
}