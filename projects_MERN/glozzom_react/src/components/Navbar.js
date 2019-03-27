import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavbarPage = () => {
  return (
    <Navbar bg="dark" expand="sm" className="navbar-dark">
      <div class="container">
        <Navbar.Brand href="#home">Glozzom</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink exact to="/" activeClassName="active" className="nav-link">Home</NavLink>
            <NavLink exact to="/about" activeClassName="active" className="nav-link">About</NavLink>
            <NavLink exact to="/services" activeClassName="active" className="nav-link">Services</NavLink>
            <NavLink exact to="/blog" activeClassName="active" className="nav-link">Blog</NavLink>
            <NavLink exact to="/contact" activeClassName="active" className="nav-link">Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavbarPage;
