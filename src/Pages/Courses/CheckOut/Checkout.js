import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const check = useLoaderData();
    console.log(check)
    return (
        <div>

        </div>
    );
};

export default Checkout;