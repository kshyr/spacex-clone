import React, { Component } from 'react'
import './Header.css';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Header = () => {
  return (
    <Router>
      <div className="header">
        <div className="logo">
          <Link to="/" onClick={() => {window.location.href="/"}}>
            <img className="spacex__logo" src={process.env.PUBLIC_URL + "/spacex-logo.svg"} alt="" />
          </Link>
        </div>
        <ul className="routes">
          <li><Link to="/falcon-9" onClick={() => {window.location.href="/falcon-9"}}>FALCON 9</Link></li>
          <li><Link to="/falcon-heavy">FALCON HEAVY</Link></li>
          <li><Link to="/dragon">DRAGON</Link></li>
          <li><Link to="/starship">STARSHIP</Link></li>
          <li><Link to="/human-spaceflight">HUMAN SPACEFLIGHT</Link></li>
          <li><Link to="/rideshare">RIDESHARE</Link></li>
          <li><Link to="/shop">SHOP</Link></li>
        </ul>
      </div>
    </Router>
  )
}

export default Header;