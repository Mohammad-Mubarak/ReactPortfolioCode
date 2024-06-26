import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
     <a href="http://www.linkedin.com/in/md-mubarak-khan" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/Mohammad-Mubarak" target="_blank" rel="noreferrer" ><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials