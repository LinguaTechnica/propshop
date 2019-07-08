import React from 'react';
import {
    Link,
} from 'react-router-dom';

function Navbar(props) {
    return(
        <nav className="navbar navbar-expand-lg bg-dark">
            <Link className="navbar-brand text-warning" to="/">Rentalator</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                { props.isAuthorized ?
                    <ul className="nav">
                        <li className="nav-item px-2">
                            <Link to="/me" className="text-light">
                                <i className="fas fa-user"> </i> My Account</Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link to="/properties" className="text-light">
                                <i className="fas fa-home"> </i> My Properties</Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link to="/listings" className="text-light">
                                <i className="fas fa-sign"> </i> My Listings</Link>
                        </li>
                    </ul>
                    :
                    <ul className="nav">
                        <li className="nav-item px-2">
                            <Link to="/login" className="text-light">
                                <span><i className="fas fa-sign-in-alt"> </i> Login</span>
                            </Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link to="/register" className="text-light">
                                <span><i className="fas fa-user-plus"> </i> Signup</span>
                            </Link>
                        </li>
                    </ul>
                }
            </div>
        </nav>
    )
}

export default Navbar;
