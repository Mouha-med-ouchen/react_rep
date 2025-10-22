import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './Redux/example.js';
import Provider from 'react-redux';
import Counter from './Redux/Counter.jsx';
import store from './Redux/Store/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> 
 <Counter></Counter>
    </Provider>
      
  </React.StrictMode>
);


