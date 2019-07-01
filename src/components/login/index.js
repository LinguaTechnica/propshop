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

    return (
        <div className="justify-content-center row py-5">
            <form onSubmit={ handleSubmit } className="col-md-6">
                <h1 className="">Login</h1>
                <div className="form-group">
                    <input className="form-control" name="email" placeholder="Email" type="email"/>
                </div>
                <div className="form-group">
                    <input className="form-control" name="password" placeholder="Password" type="password"/>
                </div>
                <button className="btn btn-primary" type="submit">Login</button>
            </form>
        </div>
    )
};

export default LoginPage;
