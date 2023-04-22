import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('renders the logo image', () => {
    render(<Navbar />);
    const logo = screen.getByAltText('Project Fitness logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '../images/logo.png');
  });

  it('renders the navigation links', () => {
    render(<Navbar />);
    const fitnessLink = screen.getByText('Fitness');
    const recipesLink = screen.getByText('Recipes');
    const aboutLink = screen.getByText('About');
    const contactLink = screen.getByText('Contact us');
    expect(fitnessLink).toBeInTheDocument();
    expect(fitnessLink).toHaveAttribute('href', '/Fitness');
    expect(recipesLink).toBeInTheDocument();
    expect(recipesLink).toHaveAttribute('href', '/Recipes');
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute('href', '/About');
    expect(contactLink).toBeInTheDocument();
    expect(contactLink).toHaveAttribute('href', '/Contact');
  });
});
