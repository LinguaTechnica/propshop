import React from 'react'
import { Redirect } from 'react-router-dom'
import auth from '../../../services/authService'

/**
 * PrivateRoute
 * @desc use to add authorization to any routes
 */
class PrivateRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: null,
            tokenVerified: false
        };
    }

    /**
     * @desc Makes a verification request for a token using AuthService
     */
    componentWillMount() {
        auth.isLoggedIn()
            .then(
                () => {
                    // TODO: Didnt work out the way planned, temp quick workaround
                    this.props.authorize();
                    this.setState({ loggedIn: true, tokenVerified: true })
                },
                () => {
                    console.log('caught rejected promise');
                    this.setState({ loggedIn: false, tokenVerified: true })
                }
            )
    }

    render() {
        const { component: Component, ...rest } = this.props;
        let toRender = <img src="loader.gif" alt="loading gif" />;
        if (this.state.tokenVerified) {
            toRender = this.state.loggedIn ? (
                <Component {...rest} />
            ) : (
                <Redirect to={{ pathname: '/login' }} />
            )
        }
        return toRender
    }
}

export default PrivateRoute;
