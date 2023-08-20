/* eslint-disable no-unused-vars */
import React from 'react'
import {HeaderNav} from './components/headerNav/HeaderNav';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <HeaderNav />
    </BrowserRouter>
  )
}

export default App;
