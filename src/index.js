import React from 'react';
import ReactDOM from 'react-dom';

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
    return (
      <div>
        <h1>React Playground</h1>
        <p>
          hello {this.props.name} {this.state.secondsElapsed}
        </p>
      </div>
    );
  }
});

const elem = React.createElement(App, {name: 'React'});
ReactDOM.render(elem, root);
