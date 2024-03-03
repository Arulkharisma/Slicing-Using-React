import { Nav,Navbar, Container } from "react-bootstrap" 
import { NavLink } from "react-router-dom"
import { NavLinks } from "../data"

const NavbarComponent = () => {
  return (
    <div>
     <Navbar expand="lg" className="transparent text-center">
      <Container>
        <Navbar.Brand className="me-4" href="/"><img src="/Logo.png" alt="logo" className="me-1" /> <span className="fw-bold fs-5 align-middle">Lidia</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="ps-5 pe-5 justify-content-between">
          <Nav className="d-flex">
            {
              NavLinks.map((links) =>{
                return(
                  <div key={links.id} className="">
                    <NavLink className="text-black link-style m-2" to={links.path}>{links.text}</NavLink>
                  </div>
                )  
            })}
          </Nav>
          <div>
            <button className="justify-content-end pb-2 pt-2 pe-4 ps-4 rounded bg-white fw-bold">Login</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarComponent