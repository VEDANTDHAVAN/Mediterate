import React from 'react';
import HeroExperience from './HeroExperience';
import { useRef } from 'react';
import VariableProximity from '../blocks/TextAnimations/VariableProximity/VariableProximity';
import ShinyText from '../blocks/TextAnimations/ShinyText/ShinyText';
import TextType from '../blocks/TextAnimations/TextType/TextType';

const Hero = () => {
  const containerRef = useRef(null);

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
        <div ref={containerRef} style={{position: 'relative'}}>
         <h1><VariableProximity label={'Welcome to Mediterate'}
          className={'variable-proximity-demo'}
          fromFontVariationSettings="'wght' 400, 'opsz' 9"
          toFontVariationSettings="'wght' 1000, 'opsz' 40"
          containerRef={containerRef} radius={100} falloff='linear'  /></h1>
        </div>
        <h2><ShinyText text="A gamified MIL Learning Experience" disabled={false} speed={3} className='custom-class' /></h2>
      </div>
      {/* Login & Signup boxes */}
      <div className='auth-box auth-left'>
        <h2><TextType text={"New to this Platform?"}  typingSpeed={75}
        pauseDuration={1500} showCursor={true} cursorCharacter="|" /></h2>
        <button className='auth-btn'>Sign Up</button>
      </div>

      <div className='auth-box auth-right'>
        <h2><TextType text={"Already a User?"} typingSpeed={75}
        pauseDuration={1500} showCursor={true} cursorCharacter="|" /></h2>
        <button className='auth-btn'>Login</button>
      </div>

    </section>
  );
};

export default Hero;