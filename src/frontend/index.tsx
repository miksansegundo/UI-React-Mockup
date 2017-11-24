import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './component/App';
const { AppContainer } = require('react-hot-loader');

require('file-loader?name=./index.html!../www/index.html');
require('file-loader?name=./global.css!../www/global.css');
require('../www/global.css')

const rootEl = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    rootEl
  );
};

if (module.hot) {
  require('./component/App');
  module.hot.accept('./component/App', render);
}


render();
