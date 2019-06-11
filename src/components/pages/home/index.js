import React from 'react'
import LoginPage from "../login";

/**
 * Home Page
 *  @desc default user landing page
 *  @type function(*): * functional component
 *  @param props
 *  - Props as args
 *  - No internal state
 *  - No lifecycle methods
 *
 */
const HomePage = (props) => {

    const isLoggedIn = props.isAuthenticated;

    // TODO: render PropertyListing or other WelcomeComponent stuff?
    return (
        <div>
            { isLoggedIn ?
                <h1>Welcome!</h1>
                :
                <LoginPage {...props} />
            }
        </div>
    )
};

export default HomePage;
