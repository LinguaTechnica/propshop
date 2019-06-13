import React from "react";
import { Route, Switch } from "react-router-dom";

import PrivateRoute from "./components/partials/privateRoute/PrivateRoute"
import HomePage from "./components/pages/home";
import Navbar from './components/partials/navbar';
import LoginPage from "./components/pages/login"
import RegistrationPage from "./components/pages/registration";
import UserDetail from './components/pages/user';
import auth from './services/authService';
import { propertyService } from './services/properties';
import PropertyList from "./components/propertyList";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: false,
            isAuthorized: false
        };

        this.authenticate = this.authenticate.bind(this);
        this.authorize = this.authorize.bind(this);
        this.register = this.register.bind(this);
    }

    /**
     * Authenticate
     * @desc Sends login request and updates state accordingly
     * @param userData object/JSON of user login credentials
     */
    authenticate(userData) {
        auth.logIn(userData)
            .then(() => this.setState({ isAuthenticated: auth.isAuthenticated }))
            .then(() => this.props.history.push('/'))
    }

    /**
     * Authorize
     * @desc Updates authorization.
     */
    authorize() {
        this.setState(({ isAuthorized: auth.isAuthorized }))
    }

    register(userData) {
        auth.register(userData)
            .then(() => this.setState(({ isAuthorized: true })))
            .catch((err) => console.log(err));
    }

    // TODO: add logout() method

    // Every component needs to render HTML to the DOM. No exceptions.
    render() {
        // TODO: try implementing private route with tests first
        return (
            <div className="app-container">
                <Navbar isAuthorized={ this.state.isAuthorized } />

                <Switch>
                    <PrivateRoute path="/me" authorize={ this.authorize } component={ UserDetail } />
                    <PrivateRoute path="/properties" authorize={ this.authorize } component={ PropertyList} properties={ propertyService.properties } {...this.props} /> } />
                    <Route path="/login" render={ (props) => <LoginPage authenticate={ auth.logIn } {...props} /> } />
                    <Route path="/register" render={ (props) => <RegistrationPage register={ auth.register } {...props} /> } />
                    <Route path="/" render={ (props) => <HomePage isAuthenticated={ this.state.isAuthenticated } authenticate={ auth.logIn } {...props} /> } />
                </Switch>
            </div>
        );
    }
}

export default App;
