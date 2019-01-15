import React, { Component } from 'react';
import Stepper from './Stepper';
import Timer from './Timer';
import Tips from './Tips';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tips />
        <Stepper />
        <Timer />
      </div>
    );
  }
}

export default App;
