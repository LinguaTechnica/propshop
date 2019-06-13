import React from 'react';
import PropertyDetail from '../pages/property'

class PropertyList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            properties: []
        }
    }

    componentWillMount() {
        this.props.getProperties()
            .then((properties) => this.setState({ properties }))
            .catch(console.error)
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
