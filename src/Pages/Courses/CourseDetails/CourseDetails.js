import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import './CourseDetails.css'

const CourseDetails = () => {

    const details = useLoaderData();
    // console.log(details)
    const { _id, title, description, img, ratings, price, duration } = details

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 CourseHeading">
                    <h2 className='my-3'>{title}</h2>
                    <p className='mb-3'>{description}</p>
                    <div className='d-flex justify-content-between my-4'>
                        <div>
                            <h4 className='mb-4'>Starts with <span className='text-danger'>{price}</span> only! </h4>
                            <h6>Platform: {duration.platform}</h6>
                            <h6>Duration: {duration.time}</h6>
                        </div>
                        <h6><FaStar className='text-warning pb-1' /> {ratings}</h6>
                    </div>
                    <Link to={`/checkout/${_id}`}><button className='btn enroll-btn'>Get Premium Access</button></Link>
                </div>
                <div className="col-md-6">
                    <img className='img-fluid heroImg' src={img} alt="img" />
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;