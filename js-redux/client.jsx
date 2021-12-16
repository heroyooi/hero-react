// ie 11 대응
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { enableES5, setAutoFreeze } from 'immer';
import axios from 'axios';
import store from '@store/configureStore';
import App from '@layouts/App';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'https://heroyooi.ivyro.net' : 'http://localhost:3095';

enableES5();
setAutoFreeze(process.env.NODE_ENV !== 'production');

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#app'),
);
