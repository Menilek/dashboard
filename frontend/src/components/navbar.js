import React from "react";
import { Navbar, NavLink } from "reactstrap";
import "../App.css";

function NavBar() {
  return (
    <div>
      <Navbar expand="sm">
        <NavLink href="/ane">
          <i class="fas fa-home"></i>
        </NavLink>
        <NavLink href="/ane/dashboard">
          <i class="fas fa-wifi"></i>
        </NavLink>
        <NavLink href="/ane/learn-amharic">
          <i className="amharic-link">አማርኛ</i>
        </NavLink>
      </Navbar>
    </div>
  );
}

export default NavBar;
