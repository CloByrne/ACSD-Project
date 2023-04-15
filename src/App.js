// Import the necessary components and views
import Navbar from './components/Navbar';
import Home from './views/Home';
import Fitness from './views/Fitness';
import Health from './views/Health';
import About from './views/About';
import Contact from './views/Contact';

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
    case "/Health":
      component = <Health />
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
    <>
      <Navbar />
      <div className="App">
        {component}
      </div>
    </>
  );
}

export default App;