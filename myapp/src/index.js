import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Fruite from './fruite/Fruite';

const root = ReactDOM.createRoot(document.getElementById('root'));
const fruitsArray = [
'aloios',
'aloios',
  'aloios',
'bbbbb'
]
root.render(
  <React.StrictMode>
  
  <Fruite fruits={fruitsArray}></Fruite>
   
  </React.StrictMode>
);


