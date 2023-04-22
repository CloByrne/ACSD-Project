import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import axios from 'axios';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

/*Test that the search term is being updated correctly when the user types into the search input field.*/
test('updates search term when user types into input field', () => {
  const { getByPlaceholderText } = render(<RecipeSearch />);
  const searchInput = getByPlaceholderText('Search for a recipe...');
  fireEvent.change(searchInput, { target: { value: 'chicken' } });
  expect(searchInput.value).toBe('chicken');
});

/* Test that the search results are being displayed when the user submits a search.*/
test('displays search results when user submits a search', async () => {
  const { getByPlaceholderText, getByText, findByText } = render(<RecipeSearch />);
  const searchInput = getByPlaceholderText('Search for a recipe...');
  fireEvent.change(searchInput, { target: { value: 'chicken' } });
  const searchButton = getByText('Search');
  fireEvent.click(searchButton);
  const searchResults = await findByText('View Recipe');
  expect(searchResults).toBeInTheDocument();
});

/*Test that clicking on a recipe displays its details.*/
test('displays recipe details when user clicks on recipe header', async () => {
  const { getByPlaceholderText, getByText, findByText } = render(<RecipeSearch />);
  const searchInput = getByPlaceholderText('Search for a recipe...');
  fireEvent.change(searchInput, { target: { value: 'chicken' } });
  const searchButton = getByText('Search');
  fireEvent.click(searchButton);
  const recipeHeader = await findByText('Chicken Kiev');
  fireEvent.click(recipeHeader);
  const recipeDetails = await findByText('View Recipe');
  expect(recipeDetails).toBeInTheDocument();
});
