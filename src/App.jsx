import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/home/Home';
import Overview from './pages/business/Overview';
import Contact from './pages/contact/Contact';
import Blog from './pages/blog/Blog';
import Mental from './pages/business/mental_heath/MentalHealth.jsx';
import Results from './pages/business/result/Results.jsx';
import Service from './pages/service/Service.jsx';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="business" element={<Overview />} />
          <Route path="mental" element={<Mental />} />
          <Route path="results" element={<Results />} />
          <Route path="services" element={<Service />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
