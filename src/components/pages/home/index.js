import React from 'react'

class HomeComponent extends React.Component {

    render() {
        const isLoggedIn = this.props.isAuthenticated;

        return (
            { isLoggedIn }
            <h1>Welcome!</h1>
        )
    }
}
