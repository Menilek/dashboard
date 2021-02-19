import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/ane">
        <i class="fas fa-home"></i>
      </Link>
    </div>
  );
}

export default NavBar;
