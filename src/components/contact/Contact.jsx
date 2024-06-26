import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_iediets',
        'template_57yxelq',
        formRef.current,
        'WyGJr7vLUdrYXt1GV'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
        I do receive your messages and will respond asap if the valid email is
        provided :)
      </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon move" />
            <h4>Email</h4>
            <h5>mdmubarak78625@gmail.com</h5>
            <a href="mailto:mdmubarak78625@gmail.com">Send a message</a>
          </article>
        </div>
        

        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
            className='hadow appearance-none border border-blue-500 rounded w-full py-3 px-3 text-cyan-200  mb-3 leading-tight focus:outline-none focus:shadow-outline'

          />
          <input
            type="text"
            placeholder="Your Email"
            name="user_email"
            required
            className='hadow appearance-none border border-blue-500 rounded w-full py-3 px-3 text-cyan-200 mb-3 leading-tight focus:outline-none focus:shadow-outline'
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
            className='hadow appearance-none resize-none rounded-md border border-blue-500 rounded w-full py-2 px-3 text-cyan-200  mb-3 leading-tight focus:outline-none focus:shadow-outline'

          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
