/*Written by Clodagh Byrne*/

// Import the necessary components and views
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Fitness from './views/Fitness';
import Recipes from './views/Recipes';
import About from './views/About';
import Contact from './views/Contact';
import Footer from './components/Footer';

function App() {
  // Define a variable to hold the component to render based on the current URL
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/Fitness":
      component = <Fitness />;
      break;
    case "/Recipes":
      component = <Recipes />;
      break;
    case "/About":
      component = <About />;
      break;
    case "/Contact":
      component = <Contact />;
      break;
    default:
      component = null;
  }

  return (
    // Render the Navbar component and the appropriate view component based on the URL
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Fitness" element={<Fitness />} />
        <Route path="/Recipes" element={<Recipes />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
