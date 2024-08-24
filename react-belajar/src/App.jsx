import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Promo from './components/Promo/Promo';
import Services from './components/Services/Services';
import Recommended from './components/Recommended/Recommended';
import Benefit from './components/Benefit/Benefit';
import Leaderboard from './components/Leaderboard/Leaderboard';
import Comparison from './components/Comparison/Comparison';
import Never from './components/Never/Never';
import Register from './components/Register/Register';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className='overflow-x-hidden bg-white text-dark'>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Promo />
              <Services />
              <Recommended />
              <Benefit />
              <Leaderboard />
              <Comparison />
              <Never />
              <Footer />
            </>
          } />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
