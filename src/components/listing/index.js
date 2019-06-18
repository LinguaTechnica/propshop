import React from 'react';
import { PropertyListingForm } from '../partials/listingForm';
import { propertyListingService } from "../../services/listings";

export class ListingDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listing: {},
            showListingForm: false
        };

        this.toggleListingForm = this.toggleListingForm.bind(this);
        this.displayListingForm = this.displayListingForm.bind(this);
        this.unlist = this.unlist.bind(this);
    }

    componentWillMount() {
        this.setState({ listing: this.props });
    }

    /**
     * @desc toggles the state of the listing form
     * @param e: form event
     */
    toggleListingForm(e) {
        e.preventDefault();
        const { showListingForm } = this.state;
        this.setState({ showListingForm: !showListingForm })
    }

    /**
     * @desc returns a listing form
     * @return {*}
     */
    displayListingForm() {
        const propertyId = this.state.listing.property.id;
        return <PropertyListingForm propertyId={ propertyId } create={ propertyListingService.create } />
    }

    /**
     * @desc deletes the listing
     */
    unlist() {
        let { listing } = this.state;
        propertyListingService.delete(listing.id);
        // TODO: don't put property attributes on props? use listing.property
        this.setState({ listing: { isListed: false, property: { isListed: false }} });
    }

    render() {
        const toggleForm = this.state.showListingForm;
        const listingForm = this.displayListingForm();
        const { isListed } = this.state.listing;

        return (
            <div>
                <h3>{this.props.name}</h3>
                <img src={this.props.image} alt="property"/>
                <h4>End Date: { this.props.end }</h4>
                <div>
                    <div>{this.props.address}</div>
                    <div>{this.props.city}, {this.props.state}</div>
                    <div>Square footage: {this.props.sqft}</div>
                    <div>Max Occupancy: {this.props.max_occupancy}</div>
                </div>
                { isListed ?
                    <div className="btn-group">
                        <button className="btn btn-success" disabled>Listed</button>
                        <button className="btn btn-danger" onClick={ this.unlist }>Unlist</button>
                    </div>
                    :
                    <button className="btn btn-warning" onClick={ this.toggleListingForm }>Create Listing</button>
                }
                { toggleForm ?
                    listingForm : <span></span>
                }
            </div>
        )
    }
}

export default ListingDetail;
