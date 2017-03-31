import React, { Component } from 'react';
import './App.css';

class Content extends Component {
  render() {
    return (
      <div className="content">
        <p className="App-intro">
          testi
        </p>
      </div>
    );
  }
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





//export default App;
export { Content, AuthorContent };
