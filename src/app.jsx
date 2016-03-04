import React from 'react';
import SecondCounter from './second-counter.jsx';

export default React.createClass({
  render: function() {
    return (
      <div>
        <h1>React Playground</h1>
        <p>1 Second Counter: <SecondCounter secondInterval="1" /></p>
        <p>2 Second Counter: <SecondCounter secondInterval="2" /></p>
        <p>5 Second Counter: <SecondCounter secondInterval="5" /></p>
      </div>
    );
  }
});
