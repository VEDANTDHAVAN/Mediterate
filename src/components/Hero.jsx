import React from 'react';
import HeroExperience from './HeroExperience';

const Hero = () => {
  return (
    <section style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {/* 3D Canvas */}
      <HeroExperience />

      {/* Overlay Content */}
      <div style={{
        position: 'absolute',
        top: '70%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: 'white',
        zIndex: 10
      }}>
        <h1>Welcome to Mediterate</h1>
        <p>A gamified MIL Learning Experience</p>
      </div>
    </section>
  );
};

export default Hero;