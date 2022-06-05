import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import '@react-nx/bookstore/theme';

import App from './app/app';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@react-nx/bookstore/shared/redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
