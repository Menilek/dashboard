import React from "react";
import { Navbar, NavLink } from "reactstrap";
import "../App.css";

function NavBar() {
  return (
    <div>
      <Navbar expand="lg">
        <NavLink href="/ane">
          <i class="fas fa-home"></i>
        </NavLink>
        <NavLink href="/ane/dashboard">
          <i class="fas fa-wifi"></i>
        </NavLink>
      </Navbar>
    </div>
  );
}

export default NavBar;
