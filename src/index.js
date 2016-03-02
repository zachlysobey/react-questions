import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';

const root = document.getElementById('app');
const elem = React.createElement(App, {name: 'React'});

ReactDOM.render(elem, root);
