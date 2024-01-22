import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";

const Navbar = () => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  const handleclick = () => {
    setClicked(!clicked);
  };

  const navigatetoSignIn = () => {
    console.log("test");
    navigate("/signin");
  };

  return (
    <nav className="navbarItems">
      <h1 className="navbar-logo">Trippy</h1>

      <div className="menu-icons" onClick={handleclick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={clicked ? "navbar-menu active" : "navbar-menu"}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link className={item.cName} to={item.url}>
              <i className={item.icon}></i>
              {item.tittle}
            </Link>
          </li>
        ))}
        <button onClick={navigatetoSignIn}>Sign In</button>
      </ul>
    </nav>
  );
};

export default Navbar;