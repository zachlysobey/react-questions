/* global React, ReactDOM */

const root = document.getElementById('app');

const App = React.createClass({
  render: function() {
    return React.createElement('p', null, 'hello ' + this.props.name);
  }
});


const elem = React.createElement(App, {name: 'React'});
ReactDOM.render(elem, root);

