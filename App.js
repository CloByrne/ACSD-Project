// Import the necessary components and views
import Navbar from './components/Navbar';
import Home from './views/Home';
import About from './views/About';
import ContactUs from './views/ContactUs';

function App() {
  // Define a variable to hold the component to render based on the current URL
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/About":
      component = <About />
      break
    case "/ContactUs":
      component = <ContactUs /> 
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