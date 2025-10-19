import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import FabButton from './components/FabButton';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <FabButton/>
      <Footer/>
    </Router>
  </React.StrictMode>
);


