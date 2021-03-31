import React from 'react'

// the page will refresh if a href tag is used with an anchor tag
// <a href="/" className="brand-logo left">Instagram</a>
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <div className="nav-wrapper white">
                <Link to="/" className="brand-logo left">Instagram</Link>
                <ul id="nav-mobile" className="right">
                    <li><Link to="/signin">Signin</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar