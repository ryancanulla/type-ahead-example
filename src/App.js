import React, { Component } from 'react';
import './App.css';
import 'h8k-components';

import TypeAhead from './components/TypeAhead';

const title = "Type Ahead";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h8k-navbar header={title}></h8k-navbar>
          <div className="typeAheadContainer">
              <TypeAhead  />
          </div>
      </div>
    );
  }
}

export default App;
