import React from 'react';
import SecondCounter from './second-counter.jsx';

export default React.createClass({
  render: function() {
    const intervals = [1, 2, 3, 4, 5];
    const counters = intervals.map(interval => (
      <p key={interval}>
        {interval} Second Counter:
        {' '}
        <SecondCounter secondInterval={interval} />
      </p>
    ));
    console.log(counters);
    return (
      <div>
        <h1>React Playground</h1>
        {counters}
      </div>
    );
  }
});
