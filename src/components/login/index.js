import React from 'react'

/**
 * Login Page
 *  @desc handles user login
 *  @type function: functional component
 *  @param props
 *  - Props as args
 *  - No internal state
 *  - No lifecycle methods
 *
 */
const LoginPage = (props) => {

    /**
     * Login Handler
     * @desc Login form handler for
     * @param e: form event
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email: e.target.email.value,
            password: e.target.password.value,
        };

        // TODO: consider just using AuthService right here?
        props.authenticate(userData)
            .then(
                resp => {
                    localStorage.setItem("session_token", resp.text);
                    props.history.push( "/home")
                },
                err => alert(err)
            )
    };

    // TODO: why does a login form need user first and last name? Remove ...
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input name="email" placeholder="Email" type="email"/>
            </div>
            <div className="form-group">
                <input name="password" placeholder="Password" type="password"/>
            </div>
            <button className="btn btn-primary" type="submit">Login</button>
        </form>
    )
};

export default LoginPage;
