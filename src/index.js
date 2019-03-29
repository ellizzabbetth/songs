// outside dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';  // components are Capitalized
import { createStore } from 'redux';


// my code
import  App from './components/App';
import reducers from './reducers';

ReactDOM.render(
  <Provider store = {createStore(reducers)}>
  <App />
  </Provider>,
  document.querySelector('#root')
 );
