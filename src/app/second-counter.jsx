import React from 'react';

export default React.createClass({
  getInitialState: function() {
    return { secondsElapsed: 0 };
  },
  tick: function() {
    const interval = Number(this.props.secondInterval);
    this.setState({secondsElapsed: this.state.secondsElapsed + interval});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, this.props.secondInterval * 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <span>{this.state.secondsElapsed}</span>
    );
  }
});
