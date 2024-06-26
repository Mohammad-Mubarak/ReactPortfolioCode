import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer>
     
      <div className="footer__socials">
      <a href="http://www.linkedin.com/in/md-mubarak-khan" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Mohammad-Mubarak" target="_blank" rel="noreferrer" ><FaGithub /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy;All rights reserved by Mohammad Mubarak</small>
      </div>
    </footer>
  )
}

export default Footer