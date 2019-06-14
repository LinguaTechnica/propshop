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
export const PropertyListingForm = (props) => {

    /**
     * @desc List form handler for
     * @param e: form event
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        let userData;
        // if (e.target.start.value < end.target.end.value) {
            userData = {
                start: e.target.start.value,
                end: e.target.end.value,
            // };
        }

        // TODO: consider just using AuthService right here?
        props.authenticate(userData)
            .then(
                resp => {
                    localStorage.setItem("session_token", resp.text);
                    props.history.push( "/listings")
                },
                err => alert(err)
            )
    };

    // TODO: why does a login form need user first and last name? Remove ...
    return (
        <form onSubmit={handleSubmit}>
           <div className="form-group">
                <input name="start" placeholder="Start Date" type="date"/>
            </div>
            <div className="form-group">
                <input name="end" placeholder="End Date" type="date"/>
            </div>
            <button className="btn btn-primary" type="submit">List My Property</button>
        </form>
    )
};
