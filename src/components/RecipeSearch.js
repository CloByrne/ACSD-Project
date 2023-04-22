/*Written by Clodagh Byrne*/

import React, { useState } from 'react';
import axios from 'axios';

//Define the Recipe search component
function RecipeSearch() {
  const [searchTerm, setSearchTerm] = useState('');//declare state variable initilised to an empty string
  const [searchResults, setSearchResults] = useState([]);//function that can update its value

  //defines an event handler function that updates the searchTerm state variable when the user types into a search box
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  //defines an event handler function that sends an HTTP request to a recipe search API when the user submits a search query, and updates the searchResults state variable with the response data.
  const handleSearchSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'GET',
      url: 'https://edamam-recipe-search.p.rapidapi.com/search',
      headers: {
        'X-RapidAPI-Key': '0d19992054mshd934cb18f5348e1p108f88jsn0f391e25a7b6',
        'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
      },
      params: {
        q: searchTerm
      }
    };

    axios.request(options)
      .then(function (response) {
        setSearchResults(response.data.hits);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  //declares state variable selectedRecipe initialised to null, and a function setSelectedRecipe that can update its value
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  //defines an event handler function that toggles the selectedRecipe state variable when the user clicks on a recipe in the search results
  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe === selectedRecipe ? null : recipe);
  };

  //defines the layout and behavior of the RecipeSearch component
  return (
    <div className="recipe-search-container">
      <form onSubmit={handleSearchSubmit}>
        <div className="recipe-search-input">
          <input type="text" value={searchTerm} onChange={handleSearchTermChange} placeholder="Search for a recipe..." />
          <button type="submit">Search</button>
        </div>
      </form>
      {searchResults.length > 0 ? (
        <ul className="recipe-search-results">
          {searchResults.map((result) => (
            <li key={result.recipe.uri} className="recipe-search-result">
              <div className="recipe-search-result-header" onClick={() => handleRecipeClick(result.recipe)}>
                <div className="recipe-search-result-header-text">
                  <h3>{result.recipe.label}</h3>
                  {selectedRecipe === result.recipe ? (
                    <span>&#9650;</span>
                  ) : (
                    <span>&#9660;</span>
                  )}
                </div>
                <img src={result.recipe.image} alt={result.recipe.label} />
              </div>
              {selectedRecipe === result.recipe && (
                <div className="recipe-search-result-body">
                  <p><a href={result.recipe.url} target="_blank" rel="noreferrer">View Recipe</a></p>
                  <h4><strong>Ingredients</strong></h4>
                  <ul>
                    {result.recipe.ingredientLines.map((ingredientLine) => (
                      <li key={ingredientLine}>{ingredientLine}</li>
                    ))}
                  </ul>
                  <p><strong>Health Labels:</strong> {result.recipe.healthLabels.join(', ')}</p>
                  <p><strong>Cautions:</strong> {result.recipe.cautions.join(', ')}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No search results found.</p>
      )}
    </div>
  );
}

export default RecipeSearch;
