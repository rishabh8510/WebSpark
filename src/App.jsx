import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home';

export const App = () => {
  return (
    <div>
        <Header/>
        <Home/>
        <Footer/>
    </div>
  );
};
