import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

const root = document.getElementById('app');
const elem = React.createElement(App, {name: 'React'});

ReactDOM.render(elem, root);
