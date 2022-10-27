import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { modeContext } from '../../Context/ModeContext';
import CourseCard from '../Shared/CourseCard/CourseCard';
import './Courses.css'
import Categories from './Course_catagories/Categories';

const Courses = () => {
    //use context
    const { mode } = useContext(modeContext);

    const courses = useLoaderData()
    return (
        <div className='container'>
            <div className={mode ? "row courseCard2" : "row courseCard"}>
                <div className="col-md-2">
                    <h4 className='text-start mb-5 clr'>All Catagories</h4>
                    <Categories></Categories>
                </div>
                <div className="col-md-10 ">
                    <h4 className={mode ? 'text-center text-light mb-3' : 'text-center mb-3'}>Our Courses: {courses.length}</h4>
                    <div className='card-sizing'>
                        {
                            courses.map(course => <CourseCard key={course._id} course={course}></CourseCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;