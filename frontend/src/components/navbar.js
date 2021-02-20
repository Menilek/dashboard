import React from "react";
// import { Link } from "react-router-dom";
import { Navbar, NavLink } from "reactstrap";
import "../App.css";

function NavBar() {
  return (
    <div>
      <Navbar  light expand="lg">
        <NavLink href="/ane/dashboard">
          <i class="fas fa-wifi"></i>
        </NavLink>
      </Navbar>
      <Navbar  light expand="lg">
        <NavLink href="/ane">
          <i class="fas fa-home"></i>
        </NavLink>
      </Navbar>
      {/* <Link to="/ane">
        <i class="fas fa-home"></i>
        <i class="fas fa-wifi"></i>
      </Link> */}
    </div>
  );
}

export default NavBar;
