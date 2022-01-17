import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import Logo from "../../assets/logo.png";
import { NavLink, useHistory } from "react-router-dom";

const TopBar = () => {
  const history = useHistory();
  const { pathname } = history.location;

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="topbar">
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
            to="/camera"
            activeClassName="selected"
            className="topbar-nav"
          >
            Camera
          </NavLink>
          <NavLink
            to="/dashboard"
            activeClassName="selected"
            className="topbar-nav"
          >
            Dashboard
          </NavLink>

          <NavDropdown
            title="Tabel Kehadiran"
            id="basic-nav-dropdown"
            alignRight
            className={`topbar-drop-text ${
              pathname === "/kehadiran" && "selected"
            }`}
          >
            <NavLink to="/kehadiran">Tabel Kehadiran</NavLink>
            <NavDropdown.Divider />
            <NavLink to="/attendance">Pengajuan</NavLink>
            <NavDropdown.Divider />
            <NavLink to="/jadwal">Jadwal</NavLink>
          </NavDropdown>

          <NavDropdown
            title="Profile"
            id="basic-nav-dropdown"
            alignRight
            className={`topbar-drop-text ${
              pathname === "/profile" && "selected"
            }`}
          >
            <NavLink to="/profile" activeClassName="selected">
              My Profile
            </NavLink>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/logout">Log out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopBar;
