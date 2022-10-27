import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { modeContext } from '../../../Context/ModeContext';
import CourseCard from '../../Shared/CourseCard/CourseCard';
import Categories from '../Course_catagories/Categories';

const CoursePerCat = () => {

    //use context
    const { mode } = useContext(modeContext);

    const coursePerCat = useLoaderData()
    return (
        <div className='container'>
            <div className={mode ? "row courseCard2" : "row courseCard"}>
                <div className="col-md-2">
                    <h4 className='text-start mb-5 clr'>All Catagories</h4>
                    <Categories></Categories>
                </div>
                <div className="col-md-10">
                    <h4 className={mode ? 'text-center text-light mb-3' : 'text-center mb-3'}>Our Courses: {coursePerCat.length}</h4>
                    <div className='card-sizing mx-5'>
                        {
                            coursePerCat.map(c => <CourseCard key={c._id} course={c}></CourseCard>)
                        }
                    </div>
                    <p className='text-muted text-center'><small>Coming soon....</small></p>
                </div>
            </div>
        </div>
    );
};

export default CoursePerCat;