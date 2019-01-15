import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
    this.intervalTimer = null;
  }

  onInputChange(value, timerElement) {
    this.setState({
      [timerElement]: value,
    });
  }

  onStart() {
    const futurTime =
      Date.now() +
      Number(this.state.hours) * 60 * 60 * 1000 +
      Number(this.state.minutes) * 60 * 1000 +
      Number(this.state.seconds) * 1000;
    this.intervalTimer = setInterval(() => {
      const distance = futurTime - Date.now();

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.setState({
        hours,
        minutes,
        seconds,
      });
      if (distance <= 0) {
        clearInterval(this.intervalTimer);
      }
      console.log(distance, seconds);
    }, 100);
  }

  onReset() {
    this.setState({
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
  }

  render() {
    return (
      <div className="timer">
        <div className="container">
          <div className="timer-block">
            <p className="timer-title">Hour</p>
            <input
              className="timer-element"
              type="text"
              value={this.state.hours}
              onChange={e => this.onInputChange(e.target.value, 'hours')}
            />
          </div>
          <div>
            <p className="timer-separation">:</p>
          </div>
          <div className="timer-block">
            <p className="timer-title">Minutes</p>
            <input
              className="timer-element"
              type="text"
              value={this.state.minutes}
              onChange={e => this.onInputChange(e.target.value, 'minutes')}
            />
          </div>
          <div>
            <p className="timer-separation">:</p>
          </div>
          <div className="timer-block">
            <p className="timer-title">Seconds</p>
            <input
              className="timer-element"
              type="text"
              value={this.state.seconds}
              onChange={e => this.onInputChange(e.target.value, 'seconds')}
            />
          </div>
        </div>
        <div className="container">
          <button className="btn-nude">Pause</button>
          <button className="btn-start" onClick={this.onStart.bind(this)}>
            Start
          </button>
          <button className="btn-nude" onClick={this.onReset.bind(this)}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Timer;
