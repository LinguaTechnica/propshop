import React from 'react';
import ListingDetail from '../listing';
import { propertyListingService } from "../../services/listings";

export default class PropertyListingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listings: []
        }
    }

    /**
     * React Lifecycle Method
     * @desc minimalist state management; sends api request for fresh property data
     * before component renders
     */
    componentWillMount() {
        // TODO: can accept argument ownerId to get properties belonging to a user
        propertyListingService.getListings(1)
            .then((listings) => this.setState({ listings }))
            .catch(console.error)
    }

    /**
     * @desc create PropertyDetail elements
     * @return {PropertyDetail[]}
     */
    createPropertyElements() {
        // TODO: verify this expects listings with nested property (ex. {id: 1, property: {...}})
        return this.state.listings.map((listing) => {
            return <ListingDetail key={ listing.id } {...listing} {...listing.property} />
        })
    }

    render() {
        const listings = this.createPropertyElements();

        return (
            <div>
                <h1>My Listings</h1>
                { listings }
            </div>
        );
    }
}
