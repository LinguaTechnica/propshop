import React from 'react';
import { PropertyListingForm } from '../partials/listingForm';

export class ListingDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showListingForm: false
        };

        this.toggleListingForm = this.toggleListingForm.bind(this);
        this.displayListingForm = this.displayListingForm.bind(this);
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
        return <PropertyListingForm {...this.props} />
    }

    render() {
        const toggleForm = this.state.showListingForm;
        const listingForm = this.displayListingForm();

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
                <button className="btn btn-warning" onClick={ this.toggleListingForm }>Create Listing</button>
                { toggleForm ?
                    listingForm :
                    <span></span>
                }
            </div>
        )
    }
};

export default ListingDetail;
