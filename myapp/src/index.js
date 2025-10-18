import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Math from './UseMemo/Math';
import UsersList from './CustomHooks/UserList';
import TodosList from './CustomHooks/TodoList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UsersList></UsersList>
    <TodosList></TodosList>
  </React.StrictMode>
);


