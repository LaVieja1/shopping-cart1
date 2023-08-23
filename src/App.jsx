/* eslint-disable no-unused-vars */
import React from 'react'
import {HeaderNav} from './components/headerNav/HeaderNav';
import { BrowserRouter } from 'react-router-dom';
import { Nav } from './components/nav/Nav';
import { Brands } from './components/brands/Brands';

function App() {
  return (
    <BrowserRouter>
      <HeaderNav />
      <Nav />
      <Brands />
    </BrowserRouter>
  )
}

export default App;
