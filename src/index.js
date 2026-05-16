import React from 'react';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
} from "react-router";
import App from './components/App';

const root = ReactDOM.createRoot(
  document.getElementById("app")
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
