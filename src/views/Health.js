import '../styles/Navbar.css';
import '../styles/Health.css';
import RecipeSearch from '../components/RecipeSearch'

function Health() {
    return (
      <div>
        <div className="health-container">
          <div className="health-text">
            <h1>Welcome to the Health page</h1>
            <div className="health-sub-text">
              <p>We offer a variety of resources and information to help you achieve your health and fitness goals</p>
            </div>
          </div>
        </div>
        <div className="recipe-container">
            <p>Type an ingredient below to get a list of recipes</p>
            <div className="recipe-container">
                <RecipeSearch />
            </div>
        </div>
      </div>
    );
  }
  
  export default Health;