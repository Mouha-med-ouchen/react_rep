import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Form from './Form/Form'
import Fruitslists from './fruite/FruitsList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Form></Form>
    <Fruitslists fruits={['hhhhh']}></Fruitslists>
  </React.StrictMode>
);


