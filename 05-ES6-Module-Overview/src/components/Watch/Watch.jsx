import React from 'react';

const Watch = ({watch}) => {
    const {model, brand, price} = watch;
    return (
        <div>
            <h2>Watch: {model}</h2>
            <h4>Brand: {brand}</h4>
            <p>Price: {price}</p>
        </div>
    );
};

export default Watch;