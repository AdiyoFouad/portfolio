import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import FabButton from './components/FabButton';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/About';
import Contact from './pages/Contact';
import Parcours from './pages/Parcours';
import Skills from './pages/Skills';
import Projects from './pages/Projects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Parcours />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <FabButton/>
      <Footer/>
    </Router>
  </React.StrictMode>
);


