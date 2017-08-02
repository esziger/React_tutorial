import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    
    function formatName(user){
      return user.firstName + ' ' +user.lastName;
    }

    const user = {
      firstName: 'Gergely',
      lastName: 'Szilagyi'
    }

    const element = (
      <h1>
        Hello, {formatName(user)}!
      </h1>
    );


    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started with this, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {element}
        </p>
      </div>
    );
  }
}

export default App;
