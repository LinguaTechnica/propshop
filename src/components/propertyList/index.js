import React from 'react';
import PropertyDetail from '../property';
import { propertyService } from "../../services/properties";

class PropertyList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            properties: []
        }
    }

    /**
     * React Lifecycle Method
     * @desc minimalist state management; sends api request for fresh property data
     * before component renders
     */
    componentWillMount() {
        // TODO: can accept argument ownerId to get properties belonging to a user
        propertyService.getProperties(1)
            .then((properties) => this.setState({ properties }))
            .catch(console.error)
    }

    /**
     * @desc create PropertyDetail elements
     * @return {PropertyDetail[]}
     */
    createPropertyElements() {
        return this.state.properties.map((property) => {
            return <PropertyDetail key={ property.id } {...property} />
        })
    }

    render() {
        const properties = this.createPropertyElements();

        return (
            <div>
                <h1>My Properties</h1>
                { properties }
            </div>
        );
    }
}

export default PropertyList;
