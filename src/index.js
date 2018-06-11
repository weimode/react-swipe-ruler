import React from 'react';
import ReactDOM from 'react-dom';
import SwipeRuler from './components/SwipeRuler.js';
import './components/SwipeRuler.css';

const render = () => {
  ReactDOM.render(
    <SwipeRuler />,
    document.getElementById('root')
  );
};

render();
