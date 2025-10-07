import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Form from './hello/Form';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Form LB="your name" PL="entre your name">
      pleas you can add you name ?
    </Form>
     <Form LB="your last name" PL="entre your last name">
      pleas you can add you last name ?
   </Form>
  </React.StrictMode>
);


