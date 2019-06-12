import React from 'react';

const PropertyDetail = (props) => {
        return (
            <div>
                <h3>{ props.name }</h3>
                <div>
                    <p>{ props.address }</p>
                </div>
            </div>
        );
};

export default PropertyDetail;
