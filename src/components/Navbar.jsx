import React from "react";
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="nav">
      <ul>
      <li>
              <Link to="/">HOME</Link>
            </li>

            <li>
              <Link to="/about">ABOUT</Link>
            </li>

            <li>
              <Link to="/services">SERVICES</Link>
            </li>

            <li>
              <Link to="/contact">CONTACT</Link>
            </li>

      </ul>
    </div>
  );
};

export default Navbar;
