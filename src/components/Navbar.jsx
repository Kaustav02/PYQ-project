import React from "react";
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="nav">
      <ul>
      <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/services">Services</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>

      </ul>
    </div>
  );
};

export default Navbar;
