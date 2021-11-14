import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from "react-use-cart";
import Store from './redux/configStore';
import {Provider} from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
    <CartProvider>
      <App />
    </CartProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


