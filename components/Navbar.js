// Import the Navbar CSS styles and logo image
import logo from '../images/logo.png';
import '../styles/Navbar.css';

// Define a functional component called Navbar
export default function Navbar() {
  // Return the JSX for the Navbar component
  return (
    <nav className="nav">
      <div >
        <a href="/">
          <img src={logo} alt="Project Fitness logo" width="150" />
        </a>
      </div>
      
      <ul>
        <CustomLink href="/fitness">Fitness </CustomLink>
        <CustomLink href="/health">Health </CustomLink>
        <CustomLink href="/about">About </CustomLink>
        <CustomLink href="/contact">Contact us </CustomLink>
      </ul>
    </nav>
  )
}
// Define a separate functional component called CustomLink
function CustomLink({ href, children, ...props}){
  // Get the current URL path
  const path = window.location.pathname

  // Render the CustomLink component with an "active" class if the URL path matches the link href
  return(
    <li className={path === href ? "active" : ""}>
      <a href={href}>{children}</a>
    </li>
  )
}
