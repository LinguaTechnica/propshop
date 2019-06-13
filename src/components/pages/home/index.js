import React from 'react'
import LoginPage from "../login";
import PropertyList from '../property';
import { Redirect } from "react-router-dom";
import {propertyService} from "../../../services/properties";

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
                <Redirect to={{ pathname: '/properties' }} />
                :
                <LoginPage {...props} />
            }
        </div>
    )
};

export default HomePage;
