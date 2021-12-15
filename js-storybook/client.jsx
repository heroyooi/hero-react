import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { enableES5, setAutoFreeze } from 'immer';
import App from '@layouts/App';

enableES5();
setAutoFreeze(process.env.NODE_ENV !== 'production');

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#app'),
);
