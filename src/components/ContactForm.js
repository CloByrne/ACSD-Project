/*Written by Clodagh Byrne*/

import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ContactForm.css';

function ContactForm() {
  // Initialize the form data state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle the input field changes
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // Handle the form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      // Send the form data to the backend using the axios library
      const response = await axios.post('http://localhost:5000/api/contact', formData);
  
      // Log the form data to the console
      console.log('Form data:', formData);
      console.log('Response data:', response.data);
      
      // Reset the form data state
      setFormData({
        name: '',
        email: '',
        message: '',
      });

    // Show a success message
    alert('Your message was sent successfully!');

    } catch (error) {
      // Handle the form submission error
      console.log(error);
    }
  };

  // Render the contact form
  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
  
}

export default ContactForm;