import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';
import Theme from '../toggle theme/Theme'

const Header = () => {
  return (
    <>
    <Theme/>
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mohammad Mubarak</h1>
        <h4 className="text-light">Full-stack Developer</h4>
    
        <p className='val'>Full Stack Web Developer. I'm from Faridabad, India. I have completed BVOC <br/>
in Web Development from YMCA University. I'm an enthusiastic fresher, seeking<br/>
a career with a progressive organization to capitalize on my skills and abilities in the<br/>
field of information technology, and eager to learn new technologies.</p>
        <CTA />
  
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
    </>
  );
};

export default Header;
