/*Written by Clodagh Byrne*/
import '../styles/Navbar.css';
import '../styles/Home.css';
import Carousel from '../components/Carousel';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="home-text">
          <h1>Welcome to Project Fitness</h1>
          <div className="home-sub-text">
            <p>We offer a variety of resources and information to help you achieve your health and fitness goals</p>
          </div>
        </div>
      </div>
      <div className="home-body">
        <h2 className="home-subtitle">Use our website to help reach your health and fitness goals</h2>
        <p className="home-paragraph">Select the <Link to="/Fitness" style={{color: "#B99855"}}>Fitness</Link> tab for different fitness activities you can try at home or in the gym</p>
        <p className="home-paragraph">Use the <Link to="/Health" style={{color: "#B99855"}}>Recipes</Link> tab to search for recipes based on the ingredients you have in your kitchen</p>
        <p className="home-paragraph">Use our <Link to="/Contact" style={{color: "#B99855"}}>Contact</Link> form to get help and support on your fitness journey</p>
      </div>
      <Carousel/>
    </div>
  )
}

export default Home;
