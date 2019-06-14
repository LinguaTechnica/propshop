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
                <ul>
                    <li><Link to="/properties">My Properties</Link></li>
                    <li><Link to="/listings">My Listings</Link></li>
                </ul>
            </div>
        );
    }
}

export default UserDetail;
