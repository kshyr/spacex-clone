import React, {Component} from 'react'
import './Header.css'
import {Link, BrowserRouter as Router, } from 'react-router-dom'

class Header extends Component {
    render() {
        return(<>
                <Router>
                    <div className="header">
                        <div className="backgroundimage">
                            <Link to="/"><img className="spacex__logo" src="https://logos-world.net/wp-content/uploads/2020/09/SpaceX-Logo.png" alt="" /></Link>
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
                    </div>
                </Router>
            </>
        )
    }
}

export default Header;