import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/actividad1" activeClassName="active">
              Actividad 1
            </NavLink>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
