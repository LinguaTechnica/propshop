import React from 'react';
import { Link } from "react-router-dom";

class UserDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>My Account</h1>
                <Link to="/properties">Properties</Link>
            </div>
        );
    }
}

export default UserDetail;
