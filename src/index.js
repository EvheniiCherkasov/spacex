import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {Store} from "./Store";
import './index.css';
import App from './App';
import "./Firebase";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={Store}>
              <App />
          </Provider>
      </BrowserRouter>
  </React.StrictMode>
);


