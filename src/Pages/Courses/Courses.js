import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../Shared/CourseCard/CourseCard';
import './Courses.css'
import Categories from './Course_catagories/Categories';

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div className='container'>
            <div className="row courseCard">
                <div className="col-md-2">
                    <h4 className='text-start mb-5 clr'>All Catagories</h4>
                    <Categories></Categories>
                </div>
                <div className="col-md-10 ">
                    <h4 className='text-center mb-3'>Our Courses: {courses.length}</h4>
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