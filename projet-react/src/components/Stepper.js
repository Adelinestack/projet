import React, { Component } from 'react';
import './Stepper.css';

class Stepper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  add(num) {
    this.setState({
      counter: this.state.counter + num,
    });
  }

  render() {
    return (
      <div className="stepper">
        <div className="container">
          <div>
            <button onClick={() => this.add(-10)}>-10</button>
            <button onClick={() => this.add(-1)}>-1</button>
          </div>
          <div className="counter">{this.state.counter}</div>
          <div>
            <button onClick={() => this.add(1)}>+1</button>
            <button onClick={() => this.add(10)}>+10</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Stepper;
