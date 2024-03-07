import { useState, useEffect } from "react"
import { Nav,Navbar, Container } from "react-bootstrap" 
import { NavLink } from "react-router-dom"
import { NavLinks } from "../data"

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);
  const [changeText, setChangeText] = useState(false);

  const changeBackground = () =>{
    if(window.scrollY > 50){
      setChangeColor(true)
      setChangeText(true)
    }else{
      setChangeColor(false);
      setChangeText(false);
    }
  };

  useEffect(() =>{
    changeBackground();

    window.addEventListener("scroll", changeBackground)
  })

  return (
    <div>
     <Navbar expand="lg" className={` fixed-top text-center ${changeColor ? "bg-active" : ""}`}>
      <Container>
        <Navbar.Brand className="me-4" href="/"><img src="/Logo.png" alt="logo" className="me-1" /> <span className={`fw-bold fs-5 align-middle ${changeText ? "color-active" : ""}`}>Arkha</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="ps-5 pe-5 justify-content-between">
          <Nav className="d-flex">
            {
              NavLinks.map((links) =>{
                return(
                  <div key={links.id} className={`link-style`}>
                    <NavLink 
                      to={links.path} 
                      className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""} end>
                        {links.text}
                    </NavLink>
                  </div>
                )  
            })}
          </Nav>
          <div>
            <button className="justify-content-end pb-2 pt-2 pe-4 ps-4 rounded bg-white fw-bold border-0">Login</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarComponent