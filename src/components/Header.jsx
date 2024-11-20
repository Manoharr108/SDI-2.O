import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          <img src="./img/sdinavbar.png" alt="Logo" className="logo-image" />
        </NavLink>
        <div style={{fontSize:"25px", letterSpacing:"2px",cursor:"pointer"}} onClick={(e)=>{location.href= "/"}} >SDI</div>
      </div>
      <nav className="nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'nav-link active home' : 'nav-link')}
        >
          Home
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive }) => (isActive ? 'nav-link active register' : 'nav-link')}
        >
          Register
        </NavLink>
        <NavLink
          to="/team"
          className={({ isActive }) => (isActive ? 'nav-link active team' : 'nav-link')}
        >
          Team
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? 'nav-link active contact' : 'nav-link')}
        >
          Contact us
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
