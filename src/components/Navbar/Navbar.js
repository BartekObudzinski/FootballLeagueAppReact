import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/league" activeStyle>
            League
          </NavLink>
          <NavLink to="/admin-panel" activeStyle>
            Panel Admin
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
