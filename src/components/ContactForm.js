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
      const response = await axios.post('/api/contact', formData);
  
      // Log the form data to Postman and the console
      console.log('Form data:', formData);
      console.log('Postman data:', response.data);
    } catch (error) {
      // Handle the form submission error
      console.log(error);
    }
  };

  // Render the contact form
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
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
          <label htmlFor="email">Email:</label>
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
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;

