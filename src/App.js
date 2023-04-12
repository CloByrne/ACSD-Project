import Navbar from './components/Navbar';
import Home from './views/Home';
import About from './views/About';
import ContactUs from './views/ContactUs';

function App() {
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