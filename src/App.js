import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Shopping List</h2>
        </div>
        <div className="Shopping-App">
          <form>
            <input type="text"/>
          </form>
          <div className="Shopping-List">
            <ul>
              <li><input type="checkbox"/>Egg</li>
              <li><input type="checkbox"/>Milk</li>
              <li><input type="checkbox"/>Orange</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
