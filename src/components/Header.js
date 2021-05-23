import React, {Component} from 'react'
import './Header.scss'
import {Link, BrowserRouter as Router } from 'react-router-dom'

class Header extends Component {
    render() {
        return(<>
            <Router>
                <div className="header">
                    <Link to="/">
                        <img className="spacex__logo" src={process.env.PUBLIC_URL+ "/spacex-logo.svg"} alt="" />
                    </Link>
                    <ul className="Routes">
                        <li><Link to="/vehiles/falcon-9">FALCON 9</Link></li>
                        <li><Link to="/vehiles/falcon-heavy">FALCON HEAVY</Link></li>
                        <li><Link to="/vehiles/dragon">DRAGON</Link></li>
                        <li><Link to="/vehiles/starship">STARSHIP</Link></li>
                        <li><Link to="/vehiles/human-spaceflight">HUMAN SPACEFLIGHT</Link></li>
                        <li><Link to="/vehiles/rideshare">RIDESHARE</Link></li>
                        <li><Link to="shop">Shop</Link></li>
                    </ul>
                </div>
            </Router>
            </>
        )
    }
}

export default Header;