/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Jordan from './pages/Jordan';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/jordan' element={<Jordan />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;