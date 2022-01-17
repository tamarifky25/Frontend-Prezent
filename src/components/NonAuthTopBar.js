import {
    Navbar,
    Nav,
  } from "react-bootstrap";
  
  import Logo from "../assets/logo.png";
  import { NavLink } from "react-router-dom";
  
  const TopBar = () => {
    return (
      <Navbar variant="dark" className="topbar">
        <Navbar.Brand href="#home" className="pt-0 pb-0">
          <img
            src={Logo}
            alt="logo"
            width="120"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink
              to="/login"
              activeClassName="selected"
              className="topbar-nav topbar-login-button mr-3"
            >
              Log in
            </NavLink>
            <NavLink
              to="/register"
              activeClassName="selected"
              className="topbar-nav topbar-register-button"
            >
              Register
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };
  
  export default TopBar;
  