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
                    { props.isAuthenticated ?
                        <li className="nav-item">
                            <Link to="/profile">Profile</Link>
                        </li>
                        :
                        <li className="nav-item">
                            <Link to="/login">
                                <span><i className="fas fa-sign-in-alt"></i> Login</span>
                            </Link>
                        </li>
                    }
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">
                            <span><i className="fas fa-user-plus"></i> Signup</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
