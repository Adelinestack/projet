import React, { Component } from 'react';
import './Stepper.css';

class Stepper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  minus(num) {
    this.setState({
      counter: this.state.counter - num,
    });
  }
  plus(num) {
    this.setState({
      counter: this.state.counter + num,
    });
  }

  render() {
    return (
      <div className="container">
        <div>
          <button onClick={() => this.minus(10)}>-10</button>
          <button onClick={() => this.minus(1)}>-1</button>
        </div>
        <div className="counter">{this.state.counter}</div>
        <div>
          <button onClick={() => this.plus(1)}>+1</button>
          <button onClick={() => this.plus(10)}>+10</button>
        </div>
      </div>
    );
  }
}

export default Stepper;
