import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import AppContainer from './App/AppContainer';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
        <AppContainer/>
    </Router>
  </React.StrictMode>
);

