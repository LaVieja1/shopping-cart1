/* eslint-disable no-unused-vars */
import React from 'react'
import {HeaderNav} from './components/headerNav/HeaderNav';
import { BrowserRouter } from 'react-router-dom';
import { Nav } from './components/nav/Nav';
import { Brands } from './components/brands/Brands';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <HeaderNav />
      <Nav />
      <Brands />
      <Footer />
    </BrowserRouter>
  )
}

export default App;
