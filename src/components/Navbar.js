import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="title">
        Project Fitness
      </a>
      <ul>
        <CustomLink href="/about">About</CustomLink>
        <CustomLink href="/contact">Contact us</CustomLink>
      </ul>
    </nav>
  )
}
  
  function CustomLink({ href, children, ...props}){
    const path = window.location.pathname

    return(
      <li className={path === href ? "active" : ""}>
        <a href={href}>{children}</a>
      </li>
    )
  }
