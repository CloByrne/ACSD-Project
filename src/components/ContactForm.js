import React, { useState } from 'react';
import axios from 'axios';

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
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
