import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import { Globalstate } from './state/Provider';
import reducer, { initialstate } from './state/Reducer';

ReactDOM.render(
  <Globalstate initialstate={initialstate} reducer={reducer}>
  <App />
  </Globalstate>,
  document.getElementById('root')
);
