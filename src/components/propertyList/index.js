import React from 'react';
import PropertyDetail from '../pages/property'

class PropertyList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            properties: [{id: '123', name: 'Test Property', address: '123 Main Street'}]
        }
    }

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
