import React from "react";
import { Navbar, NavLink } from "reactstrap";
import "../App.css";

function NavBar() {
  const items = [
    {
      path: "/ane",
      icon: "fas fa-home",
      value: "home",
    },
    {
      path: "/ane/dashboard",
      icon: "fas fa-wifi",
      value: "wifi",
    },
    {
      path: "/ane/learn-amharic",
      icon: "amharic-link",
      value: "amharic",
      text: "አማርኛ",
    },
    {
      path: "/ane/amharic-fidel",
      icon: "amharic-link",
      value: "fidel",
      text: "ፊደል",
    },
  ];

  return (
    <div>
      <Navbar expand="sm">
        {items.map((item) => (
          <NavLink href={item.path} key={item.value}>
            <i className={item.icon}>{item.text}</i>
          </NavLink>
        ))}
      </Navbar>
    </div>
  );
}

export default NavBar;
