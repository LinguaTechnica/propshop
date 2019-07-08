import React from 'react'

/**
 * Property Listing Form
 *  @desc handles user login
 *  @param props
 *
 */
export class PropertyListingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listing: {
                startDate: '',
                endDate: '',
                propertyId: this.props.id
            },
            inValidForm: true
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateField = this.validateField.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }
    /**
     * @desc Listing form handler
     * @param e: form event
     */
    handleSubmit(e) {
        e.preventDefault();
        let listingData = {
            propertyId: this.props.listing.propertyId,
            start: e.target.start.value,
            end: e.target.end.value,
        };
        this.props.create(listingData);
    };

    validateField(e) {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    validateForm(e) {
        e.preventDefault();
        let { startDate, endDate } = this.state.listing;
        startDate = new Date(startDate);
        endDate = new Date(endDate);
        const inValidForm = startDate > endDate;
        this.setState({ inValidForm })
    }

    // TODO: why does a login form need user first and last name? Remove ...
    render() {
        const { inValidForm } = this.state;
        return (
            <form onSubmit={ this.handleSubmit } onChange={ this.validateForm } className="m-1">
                <div className="form-group">
                    <input className="form-control col" name="start" onChange={ this.validateField } placeholder="Start Date" type="date"/>
                </div>
                <div className="form-group">
                    <input className="form-control col" name="end" onChange={ this.validateField } placeholder="End Date" type="date"/>
                </div>
                <button className="btn btn-primary" type="submit" disabled={ inValidForm }>List My Property</button>
            </form>
        )
    }
}
