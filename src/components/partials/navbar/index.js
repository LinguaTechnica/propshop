import React from 'react';
import {
    Link,
} from 'react-router-dom';

function Navbar(props) {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Rentalator</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    { props.isAuthorized ?
                        <li className="nav-item">
                            <Link to="/me">
                                <i className="fas fa-user"></i> My Account</Link>
                        </li>
                        :
                        <div>
                            <li className="nav-item">
                                <Link to="/login">
                                    <span><i className="fas fa-sign-in-alt"></i> Login</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/register">
                                    <span><i className="fas fa-user-plus"></i> Signup</span>
                                </Link>
                            </li>
                        </div>
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
