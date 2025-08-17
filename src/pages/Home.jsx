import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div style={{ position:'relative', minHeight:'100vh', overflow:'hidden' }}>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;