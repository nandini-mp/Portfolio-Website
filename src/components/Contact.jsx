import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-description">
        Have a question or want to work together? Send me a message!
      </p>

      <form 
        className="contact-form" 
        action="https://formspree.io/f/xovwpnvz"
        method="POST"
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="_replyto" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>

        <button type="submit" className="submit-button">Send Message</button>
      </form>

      <p className="contact-copyright">
        Copyright &copy; {new Date().getFullYear()} Nandini M Prakash. All Rights Reserved.
      </p>
    </section>
  );
};

export default Contact;