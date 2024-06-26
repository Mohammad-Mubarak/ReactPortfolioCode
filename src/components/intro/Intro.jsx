import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon keep" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon keep" />
              <h5>Projects</h5>
              <small>30+ Completed Projects</small>
            </article>
          </div>
        
          <p className='val'>I enjoy taking challenges and giving my best. My interest lies in problem-solving
and software development. I am a constant learner and I like interacting with people. I am fluent in languages like Javascript and Java. I enjoing in experimenting with
HTML, CSS, and modern Javascript libraries like React .
My field of Interest's are building new Web Technologies, Products and in
Data Structures and Algorithms.</p>
          
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro