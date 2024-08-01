import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Store from "./Store/Store";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";


const root = ReactDOM.createRoot(document.getElementById('root'));
const history = createBrowserHistory();
root.render(
  <Provider store={Store}>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </Provider>
);