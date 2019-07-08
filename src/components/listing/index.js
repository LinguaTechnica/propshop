import React from 'react';
import { PropertyListingForm } from '../partials/listingForm';
import { propertyListingService } from "../../services/listings";

export class ListingDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listing: {...props},
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
        const { property } = this.state.listing;
        console.log('property', property);
        return <PropertyListingForm {...property} create={ propertyListingService.create } />
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
        const { isListed } = this.state.listing.property;

        return (
            <div className="media row my-3 py-3 border border-light">
                <h3>{this.props.name}</h3>
                <img src={this.props.property.image} className="mr-3" alt="property"/>
                <div className="media-body col-8 row">
                    <div className="col">
                        <div>End Date: { this.props.property.end }</div>
                        <div>{this.props.property.address}</div>
                        <div>{this.props.property.city}, {this.props.property.state}</div>
                        <div>Square footage: {this.props.property.sqft}</div>
                        <div>Max Occupancy: {this.props.property.max_occupancy}</div>
                    </div>
                { isListed ?
                    <div>
                        <div className="btn-group col">
                            <button className="btn btn-success" disabled>Listed</button>
                            <button className="btn btn-danger" onClick={ this.unlist }>Unlist</button>
                        </div>
                    </div>
                    :
                    <div>
                        <button className="btn btn-warning row m-1" onClick={ this.toggleListingForm }>Create Listing</button>
                        { toggleForm ?
                            listingForm : <span> </span>
                        }
                    </div>
                }

                </div>
            </div>
        )
    }
}

export default ListingDetail;
