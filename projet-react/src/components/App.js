import React, { Component } from 'react';
import Stepper from './Stepper';
import Timer from './Timer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Stepper />
        <Timer />
      </div>
    );
  }
}

export default App;
