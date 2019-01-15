import React, { Component } from 'react';
import Stepper from './Stepper';
import Timer from './Timer';
import Tips from './Tips';
import Tag from './Tag';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tag />
        <Tips />
        <Stepper />
        <Timer />
      </div>
    );
  }
}

export default App;
