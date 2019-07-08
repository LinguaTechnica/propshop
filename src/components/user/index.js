import React from 'react';
import PropertyListingList from '../listingsList';
import { userService } from "../../services/users";

class UserDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    componentWillMount() {
        const user = userService.get();
        this.setState({ user });
    }

    render() {
        return (
            <div className="py-5">
                <h1>Dashboard</h1>
                <PropertyListingList {...this.props} />
            </div>
        );
    }
}

export default UserDetail;
