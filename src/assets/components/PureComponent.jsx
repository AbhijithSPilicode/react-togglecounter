import React, { PureComponent } from 'react';

class CounterWithPureComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      toggle: false
    };
  }

  handleToggle = () => {
    this.setState((prevState) => ({
      toggle: !prevState.toggle
    }));
  };

  incrementCounter = () => {
    if (this.state.toggle) {
      this.setState((prevState) => ({
        counter: prevState.counter + 1
      }));
    }
  };

  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.incrementCounter}>Increment</button>
        <button onClick={this.handleToggle}>
          {this.state.toggle ? 'Disable' : 'Enable'} Toggle
        </button>
      </div>
    );
  }
}

export default CounterWithPureComponent;
