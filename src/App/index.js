import React from 'react';
import { useState } from 'react';
import logo from '../logo.svg';
import './App.css';

import { AppUi } from './AppUi';
import {TodoProvider, TodoContext} from '../todoContext/todoContext'

function App() {
  
  return (
    <TodoProvider>
    <AppUi />
    </TodoProvider>
  );
}

export default App;
