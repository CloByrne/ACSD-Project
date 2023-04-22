/*Written by Clodagh Byrne*/

// Import the necessary components and views
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Fitness from './views/Fitness';
import Recipes from './views/Recipes';
import About from './views/About';
import Contact from './views/Contact';
import Footer from './components/Footer';

function App() {
  // Define a variable to hold the component to render based on the current URL
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/Fitness":
      component = <Fitness />
      break
    case "/Recipes":
      component = <Recipes />
      break
    case "/About":
      component = <About />
      break
    case "/Contact":
      component = <Contact /> 
      break
    default:
      component = null;
    }
  
  // Render the Navbar component and the appropriate view component based on the URL
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Fitness" component={Fitness} />
        <Route path="/Recipes" component={Recipes} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;