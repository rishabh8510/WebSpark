// App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from './pages/Home'
import PageFirst from './components/PageFirst'
import PageSecond from './components/PageSecond'
import PageThird from "./components/PageThird"
import PageFourth from "./components/PageFourth"
import PageFive from "./components/PageFive"
import ContactUs from './components/ContactUs'
import Career from './components/Career'
import Apply from './components/Apply'

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solution/transport" element={<PageFirst />} />
          <Route path="/solution/inventory" element={<PageSecond />} />
          <Route path="/solution/ecommerce" element={<PageThird />} />
          <Route path="/solution/warehouse" element={<PageFive />} />
          <Route path="/solution/edtech" element={<PageFourth />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="*" element={<h1 className="text-center mt-10 text-2xl">404 - Page Not Found</h1>} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
