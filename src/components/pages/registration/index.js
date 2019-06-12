import React from 'react'

/**
 * Registration Page
 *  @desc handles user registration
 *  @type function: functional component
 *  @param props
 *  - Props as args
 *  - No internal state
 *  - No lifecycle methods
 *
 */
const RegistrationPage = (props) => {

    /**
     * Registration Handler
     * @desc Registration form handler for
     * @param e: form event
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            email: e.target.email.value,
            password: e.target.password.value,
            passwordConf: e.target.passwordConf.value,
        };

        // TODO: consider just using AuthService right here?
        props.register(userData)
            .then(
                resp => {
                    localStorage.setItem("session_token", resp.text);
                    props.history.push( "/home")
                },
                err => alert(err)
            )
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input name="firstName" placeholder="First Name" type="text"/>
            </div>
            <div className="form-group">
                <input name="lastName" placeholder="Last Name" type="text"/>
            </div>
            <div className="form-group">
                <input name="email" placeholder="Email" type="email"/>
            </div>
            <div className="form-group">
                <input name="password" placeholder="Email" type="password"/>
            </div>
            <div className="form-group">
                <input name="passwordConf" placeholder="Confirm Password" type="password"/>
            </div>
            <button className="btn btn-primary" type="submit">Register</button>
        </form>
    )
};

export default RegistrationPage;
