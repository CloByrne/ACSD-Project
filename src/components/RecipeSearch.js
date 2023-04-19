import React, { useState } from 'react';
import axios from 'axios';

function RecipeSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

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

  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe === selectedRecipe ? null : recipe);
  };

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
                  <p>Diet Labels: {result.recipe.dietLabels.join(', ')}</p>
                  <p>Health Labels: {result.recipe.healthLabels.join(', ')}</p>
                  <p>Cautions: {result.recipe.cautions.join(', ')}</p>
                  <h4>Ingredients</h4>
                  <ul>
                    {result.recipe.ingredientLines.map((ingredientLine) => (
                      <li key={ingredientLine}>{ingredientLine}</li>
                    ))}
                  </ul>
                  <h4>Additional Info</h4>
                  <ul>
                    {result.recipe.ingredients.map((ingredient) => (
                      <li key={ingredient.foodId}>{ingredient.text}</li>
                    ))}
                  </ul>
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
