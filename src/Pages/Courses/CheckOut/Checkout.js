import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaShoppingBag } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';
import './CheckOut.css'
import { modeContext } from '../../../Context/ModeContext';

const Checkout = () => {

    //use context
    const { mode } = useContext(modeContext)

    const check = useLoaderData();
    // console.log(check)
    const { title, price } = check

    const purchaseHandler = () => {

        toast.success(`Congrats!! ${title} Purchase Successfully`)

    }

    return (
        <div className={mode ? 'container pt-5' : 'container'}>
            <div className={mode ? "card checkCard2 " : "card checkCard "}>
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
                        <select class={mode ? "form-select selector border-0 bgs text-light" : "form-select selector border-0"} aria-label="Default select example">
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