// Navbar.js

import "./navbar.css"
import {NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <NavLink to='/'>Login</NavLink>
      <NavLink to='/signup'>Signup</NavLink>
      <NavLink to='/dashboard'>Dashboard</NavLink>
    </div>
  );
}

export default Navbar ;
