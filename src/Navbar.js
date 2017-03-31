import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const makers = ['Henri', 'Jussi', 'Matias', 'Santeri'];

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

function getContent(e) {
  ReactDOM.render(
    <AuthorContent name={this} />,
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