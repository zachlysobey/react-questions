/* global React, ReactDOM */

const root = document.getElementById('app');

const App = React.createClass({
  getInitialState: function() {
    return { secondsElapsed: 0 };
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return React.createElement('p', null, 'hello ' + this.props.name + ' ' + this.state.secondsElapsed);
  }
});

const elem = React.createElement(App, {name: 'React'});
ReactDOM.render(elem, root);
