import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaShoppingBag } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';
import './CheckOut.css'

const Checkout = () => {
    const check = useLoaderData();
    // console.log(check)
    const { title, price } = check

    const purchaseHandler = () => {

        toast.success(`${title} Purchase Successfully`)

    }

    return (
        <div>
            <div className="card checkCard ">
                <div className="card-body">
                    <h3 className='text-center my-3'>Checkout</h3>
                    <div className='d-flex justify-content-between mt-5'>
                        <h6>1. Course: {title}</h6>
                        <h6>Price: {price}</h6>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between'>
                        <h5>Total:</h5>
                        <div>
                            <h5>{price}</h5>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between mt-4'>
                        <select class="form-select selector border-0" aria-label="Default select example">
                            <option selected>Select payment Method</option>
                            <option value="1">Bkash</option>
                            <option value="2">Paypal</option>
                            <option value="3">Credit card</option>
                        </select>
                        <button onClick={purchaseHandler} className='btn purchase-btn my-4'>Purchase <FaShoppingBag /></button>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Checkout;