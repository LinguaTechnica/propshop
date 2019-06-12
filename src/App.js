import React from "react";
import { Route, Switch } from "react-router-dom";

// import PrivateRoute from "./components/partials/privateRoute/PrivateRoute"
import HomePage from "./components/pages/home";
import Navbar from './components/partials/navbar';
import LoginPage from "./components/pages/login"
import auth from './services/authService';
import RegistrationPage from "./components/pages/registration";

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
     * @desc Gets token and verifies authorization
     */
    authorize() {
        auth.isLoggedIn()
            .then(
                () => this.setState(({ isAuthorized: true })),
                () => this.setState(({ isAuthorized: false }))
            )
            .catch((err) => console.log(err));
    }

    register(userData) {
        auth.register(userData)
            .then(() => this.setState(({ isAuthorized: true })))
            .catch((err) => console.log(err));
    }

    // Every component needs to render HTML to the DOM. No exceptions.
    render() {
        // TODO: try implementing private route with tests first
        return (
            <div className="app-container">
                <Navbar isAuthorized={ this.isAuthorized } />

                <Switch>
                    {/*<PrivateRoute path="/me" isAuthorized={ this.authorize } component={ User } />*/}
                    <Route path="/login" render={ (props) => <LoginPage authenticate={ auth.logIn } {...props} /> } />
                    <Route path="/register" render={ (props) => <RegistrationPage register={ auth.register } {...props} /> } />
                    <Route path="/" render={ (props) => <HomePage authenticate={ auth.logIn } {...props} /> } />
                </Switch>
            </div>
        );
    }
}

export default App;
