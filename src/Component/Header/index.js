import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Button, Form, FormControl, InputGroup, Container } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'
/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark" style={{ zIndex: '1' }}>
            <Container fluid>
                <Link className="navbar-brand" to="/">
                    Admin Dashboard
               </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">

                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown>*/}
                    </Nav>
                    

                </Navbar.Collapse>
            </Container>

        </Navbar>
   )

 }

export default Header