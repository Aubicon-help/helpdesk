import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom'
import Rotas from './Rotas'
import Menu from './base/Menu'
import Header from './base/Header'
import Footer from './base/Footer'


ReactDOM.render(
  <HashRouter>
    <React.StrictMode>
      <Header />
      <Menu />
      <Rotas />
      <Footer />
    </React.StrictMode>
  </HashRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
