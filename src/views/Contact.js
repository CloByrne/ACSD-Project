import React from 'react';
import ContactForm from '../components/ContactForm';
import '../App.css';

function Contact() {
  return (
    <div>
      <div className="contact-container">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-text">      
        <p>Fill out the form below to get in touch with us.</p>
        <ContactForm />
      </div>
  </div>
  );
}

export default Contact;
