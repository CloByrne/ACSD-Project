/*Written by Clodagh Byrne*/

import '../styles/Navbar.css';
import '../styles/Recipe.css';
import RecipeSearch from '../components/RecipeSearch'

function Recipes() {
    return (
      <div>
        <div className="health-container">
          <div className="health-text">
            <h1>Welcome to the Recipes page</h1>
            <div className="health-sub-text">
              <p>We offer a variety of resources and information to help you achieve your health and fitness goals</p>
            </div>
          </div>
        </div>
        <div className="recipe-container">
            <h2>Type an ingredient below to get a list of recipes</h2>
            <div className="recipe-container">
                <RecipeSearch />
            </div>
        </div>
      </div>
    );
  }
  
  export default Recipes;