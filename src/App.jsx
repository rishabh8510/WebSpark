import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home';
import PageFirst from './components/PageFirst';
import PageSecond from './components/PageSecond';
import PageThird from "./components/PageThird";
import PageFourth from "./components/PageFourth";
import PageFive from "./components/PageFive";

export const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solution/transport" element={<PageFirst />} />
          <Route path="/solution/inventory" element={<PageSecond />} />
          <Route path="/solution/ecommerce" element={<PageThird />} />
          <Route path="/solution/warehouse" element={<PageFive />} />
          <Route path="/solution/edtech" element={<PageFourth/>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};
