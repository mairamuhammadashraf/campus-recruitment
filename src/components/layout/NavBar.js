import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks'
 
const NavBar= () => {
    return(
        <nav className="nav-wrapper gr#795548 brown">
            <div className="container">
                <Link to="/" className="brand-logo "> Campus Recruitment System </Link>
                <SignedInLinks />
                <SignedOutLinks />
                </div>
            </nav>
    )
}
export default NavBar;