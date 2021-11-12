import React, { Component } from 'react'
import './Header.css';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Header = () => {
  return (
    <Router>
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img className="spacex__logo" src={process.env.PUBLIC_URL + "/spacex-logo.svg"} alt="" />
          </Link>
        </div>
        <ul className="Routes">
          <li><Link to="/vehicles/falcon-9">FALCON 9</Link></li>
          <li><Link to="/vehicles/falcon-heavy">FALCON HEAVY</Link></li>
          <li><Link to="/vehicles/dragon">DRAGON</Link></li>
          <li><Link to="/vehicles/starship">STARSHIP</Link></li>
          <li><Link to="/vehicles/human-spaceflight">HUMAN SPACEFLIGHT</Link></li>
          <li><Link to="/vehicles/rideshare">RIDESHARE</Link></li>
          <li><Link to="shop">SHOP</Link></li>
        </ul>
      </div>
    </Router>
  )
}

export default Header;