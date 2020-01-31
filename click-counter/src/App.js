import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      error: false
    };
  }

  decrementCounter = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1, error: false });
      return;
    }

    this.setState({ error: true });
  };
  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">{this.state.counter}</h1>
        {this.state.error && <h2 data-test="data-error">error</h2>}

        <button
          data-test="increment-button"
          onClick={() =>
            this.setState({ counter: this.state.counter + 1, error: false })
          }
        >
          increment
        </button>
        <button data-test="decrement-button" onClick={this.decrementCounter}>
          decrement
        </button>
      </div>
    );
  }
}

export default App;
