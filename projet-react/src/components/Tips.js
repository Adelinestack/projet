import React, { Component } from 'react';
import './Tips.css';

class Tips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      tips: 0,
      split: 1,
      tipsForEach: 0,
    };
  }

  onInputChange(element, e) {
    this.setState(
      {
        [element]: e.target.value,
      },
      () => {
        const tipsForEach =
          (this.state.amount * this.state.tips) / 100 / this.state.split;
        this.setState({
          tipsForEach,
        });
      }
    );
  }

  render() {
    return (
      <div className="tips">
        <div className="container-tips">
          <div>
            <div>Amount :</div>
            <div>Tips (%):</div>
            <div>Split :</div>
            <div className="result">Total per person : </div>
          </div>
          <div className="container-input">
            <input
              type="text"
              value={this.state.amount}
              onChange={this.onInputChange.bind(this, 'amount')}
            />
            <input
              type="text"
              value={this.state.tips}
              onChange={this.onInputChange.bind(this, 'tips')}
            />
            <input
              type="text"
              value={this.state.split}
              onChange={this.onInputChange.bind(this, 'split')}
            />
            <span className="result">{this.state.tipsForEach} € for each</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Tips;
