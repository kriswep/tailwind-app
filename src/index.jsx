import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';

var mountNode = document.getElementById('app');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  mountNode,
);
// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
