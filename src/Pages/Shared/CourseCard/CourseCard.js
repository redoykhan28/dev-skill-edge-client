import React from 'react';
import './CourseCard.css'
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { modeContext } from '../../../Context/ModeContext';


const CourseCard = ({ course }) => {

    // use context 
    const { mode } = useContext(modeContext)

    // console.log(course)
    const { _id, title, img, price, ratings } = course
    return (
        <div>
            <div className={mode ? "card cd2" : "card cd"}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h6>{title}</h6>
                    <div className='d-flex justify-content-between'>
                        <small className='fw-bold'>{price}</small>
                        <div d-flex align-items-center mt-3 mx-1>
                            <span className='text-warning'><FaStar /></span>
                            <small className='fw-bold'>{ratings}</small>
                        </div>
                    </div>
                    <Link to={`/details/${_id}`}><button className='btn btn-card mt-4'>See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;