import React from 'react';
import CounterWithComponent from './assets/components/ClassCounter';
import CounterWithPureComponent from './assets/components/PureComponent';

const App = () => {
  return (
    <div>
      <h2>Using Component</h2>
      <CounterWithComponent />
      <h2>Using PureComponent</h2>
      <CounterWithPureComponent />
    </div>
  );
};

export default App;
