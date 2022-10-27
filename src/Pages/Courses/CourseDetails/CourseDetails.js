import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar, FaDownload } from "react-icons/fa";
import Pdf from "react-to-pdf";
import './CourseDetails.css'
import { useContext } from 'react';
import { modeContext } from '../../../Context/ModeContext';


const ref = React.createRef();


const CourseDetails = () => {

    //use context
    const { mode } = useContext(modeContext)

    const details = useLoaderData();
    // console.log(details)
    const { _id, title, description, img, ratings, price, duration } = details

    return (
        <div className='container'>
            <div className='text-end'>
                <Pdf targetRef={ref} className={mode ? 'bg-dark' : 'bg-light'} filename="Course details.pdf">
                    {({ toPdf }) => <Link onClick={toPdf} className='text-decoration-none'><button className='btn downloadbtn'><FaDownload />  Download</button></Link>
                    }
                </Pdf>
            </div>
            <div ref={ref} className="row">
                <div className={mode ? "col-md-6 CourseHeading text-light" : "col-md-6 CourseHeading"}>
                    <h2 className='my-3'>{title}</h2>
                    <p className='mb-3'>{description}</p>
                    <div className='d-flex flex-column flex-lg-row justify-content-between my-4'>
                        <div>
                            <h4 className='mb-4'>Starts with <span className='text-danger'>{price}</span> only! </h4>
                            <h6>Platform: {duration.platform}</h6>
                            <h6>Duration: {duration.time}</h6>
                        </div>
                        <h6 className='mt-2'><span className='text-muted'>ratings:</span> <FaStar className='text-warning pb-1' />  {ratings}</h6>
                    </div>
                    <Link to={`/checkout/${_id}`}><button className='btn enroll-btn'>Get Premium Access</button></Link>
                </div>
                <div className="col-md-6">
                    {
                        mode ?
                            <img className='img-fluid rounded-4 w-75 mx-5 mt-5 mb-5' src={img} alt="img" />
                            :
                            <img className='img-fluid mb-5' src={img} alt="img" />
                    }
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;