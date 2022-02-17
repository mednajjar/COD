import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from "react-use-cart";
import Store from './redux/configStore';
import {Provider} from 'react-redux';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
const stripePromise = loadStripe(`pk_test_51IPq0nBnrf46QwrudY7pyphtWGwB5SbMuYIs9wJ7msjvA4yOT5cg409WMqwPjSgd0UcjchOi33Q8Ycq5lcmYCCP700TqXmcW5Z`)



ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
    <CartProvider>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
    </CartProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


