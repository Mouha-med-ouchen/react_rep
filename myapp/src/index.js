import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Form from './Form/Form'
import Fruitslists from './fruite/FruitsList';
import Counter from './Counter/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Counter></Counter>
  </React.StrictMode>
);


