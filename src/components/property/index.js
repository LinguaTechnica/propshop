import React from 'react';

const PropertyDetail = (props) => {
        return (
            <div>
                <h3>{ props.name }</h3>
                <img src={ props.image } alt="property"/>
                <div>
                    <div>{ props.address }</div>
                    <div>{ props.city }, { props.state }</div>
                    <div>Square footage: { props.sqft }</div>
                    <div>Max Occupancy: { props.max_occupancy }</div>
                </div>
            </div>
        );
};

export default PropertyDetail;
