import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import Overview from './pages/business/Overview';
import Contact from './pages/contact/Contact';
import Blog from './pages/blog/Blog';
import './styles/global.scss';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="business" element={<Overview />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
