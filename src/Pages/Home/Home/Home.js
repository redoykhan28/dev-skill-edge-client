import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import headerImage from '../../../images/3785210.jpg'
import headerImage2 from '../../../images/Happy student-amico (1).png'
import CourseCard from '../../Shared/CourseCard/CourseCard';
import './Home.css'
import { FaArrowRight } from "react-icons/fa";
import blogImg from '../../../images/2002.i039.026_smm_modern_promotion_isometric_icons-09.jpg'
import blogImg2 from '../../../images/bloginfo.png'
import successImage from '../../../images/9812.jpg'
import successImage2 from '../../../images/Business mission-rafiki.png'
import slide2 from '../../../images/2.PNG'
import slide3 from '../../../images/3.PNG'
import slide4 from '../../../images/4.PNG'
import slide5 from '../../../images/5.PNG'
import slide1 from '../../../images/1.PNG'
import { useContext } from 'react';
import { modeContext } from '../../../Context/ModeContext';


const Home = () => {

    //state for dark and light mode
    const { mode } = useContext(modeContext);

    //load course data
    const courses = useLoaderData().slice(0, 3);
    // console.log(courses)

    return (
        <div className='container'>
            {/* hero section start  */}
            <section className='hero my-5'>
                <div className="row">
                    <div className="col-lg-5 col-md-6 heroHeading">
                        <h1 className='m-color'>
                            Every skill you acquire doubles your odds of
                            <span> success...</span>
                        </h1>
                        <p className='my-3 text-muted'>
                            Skill Edge is an E-lerning website where you can find multiple popular courses and learning stuff which can improve your skill and learning ability beyond expectation...
                        </p>

                        <a href='#courses'><button className='btn startBtn'>Get Started</button></a>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        {
                            mode ?
                                <div className='text-center'>
                                    <img className='img-fluid w-75 heroImg' src={headerImage2} alt="img" />
                                </div>
                                :
                                <img className='img-fluid heroImg' src={headerImage} alt="img" />
                        }
                    </div>
                </div>
            </section >
            {/* hero section end  */}

            {/* leatest course start  */}
            <section className='courses my-5' id='courses'>
                <h3 className={mode ? 'text-center text-light' : 'text-center'}>Explore our leatest courses</h3>
                <div className='card-sizing mt-5'>
                    {
                        courses.map(course => <CourseCard key={course._id} course={course}></CourseCard>)
                    }
                </div>
                <p className='text-lg-end text-md-start ms-3 ms-lg-0 me-5 my-3 d-none d-md-block'><Link className=' text-decoration-none clr' to='/courses'>see more <FaArrowRight /> </Link>
                </p>
            </section>

            {/* leatest course ends */}


            {/* why skill edge start  */}
            <section className='section-3 my-5'>
                <div className="row">
                    <div className={mode ? "col-md-6 text-light heroHeading" : "col-md-6 heroHeading"}>
                        <h1>Why Skill Edge?</h1>
                        <p className='my-3'>Whether you’re an individual looking to learn full stack beggining to advance your career or an enterprise team looking to cut cycle times, speed up onboarding, or give your teams the skills to realize your strategies, we remove the challenges and roadblocks slowing you down. We’re advancing the world’s tech workforce, and that starts with making your work more efficient and effective—and giving you more to celebrate.</p>
                        <Link to='/blog'><button className='btn startBtn'>See our leatest blogs <FaArrowRight></FaArrowRight></button></Link>
                    </div>
                    <div className="col-md-6">
                        {
                            mode ?
                                <img className='img-fluid w-100 mt-1 mt-md-5 mt-lg-0' src={blogImg2} alt="img" />
                                :
                                <img className='img-fluid mt-1 mt-md-5 mt-lg-0' src={blogImg} alt="img" />
                        }
                    </div>
                </div>
            </section >
            {/* why skill edge ends */}

            {/* success section start  */}
            <section className='success my-5'>
                <div className="row">
                    <div className="col-md-4 mt-5 mt-lg-0">
                        {
                            mode ?
                                <img className='img-fluid mt-5 mt-lg-0' src={successImage2} alt="" />
                                :
                                <img className='img-fluid mt-5 mt-lg-0' src={successImage} alt="" />
                        }
                    </div>

                    <div className="col-lg-3 d-none d-lg-block">
                        <h1 className={mode ? 'sText2 text-center my-5' : ' sText text-center my-5'}>45+</h1>
                        <h1 className={mode ? 'sText2 text-center my-5' : ' sText text-center my-5'}>15k+</h1>
                        <h1 className={mode ? 'sText2 text-center my-5' : ' sText text-center my-5'}>5+</h1>
                    </div>

                    <div className="col-md-5 my-5 mt-md-0">

                        <div className='mt-lg-4'>
                            <h4 className={mode && 'text-white'}>Best & Most Involved Teachers
                            </h4>
                            <p className='text-muted'>Key features are the ability to develop relationships with their students, patient, caring, and kind personality, knowledge of learners. Engaging students in learning.
                            </p>
                        </div>



                        <div>
                            <h4 className={mode && 'text-white'}>Large selection of courses
                            </h4>
                            <p className='text-muted'>Explore a variety of fresh topics.
                                Find the right instructor for you. Learn on your schedule.
                            </p>
                        </div>


                        <div>
                            <h4 className={mode && 'text-white'}>High-Quality Course Categories
                            </h4>
                            <p className='text-muted'>For many years, we have been helping people of all inteersts adn ages learn and we have more positive reviews than anyone else.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* success section end  */}

            {/* project section start  */}
            <section className={mode ? 'my-5 projectBg2' : 'my-5 projectBg'}>
                <div className="row p-5 text-center">
                    <div className="col-lg-6 mt-5">
                        <h1 className='pageText text-center'>20+</h1>
                        <h3 className='text-center text-white'>Live Projects Demo</h3>
                        <h4 className='text-center text-white'>With Real Work Experience </h4>
                        <p className='text-white'><small>We are going to provide 20+ live projects in Full stack development with real work experience.ypu can add those projects in your resume/cv. so,If u want to start a great career then lets Enroll..</small></p>
                        <Link to='/courses'><button className='btn btclr fw-bold'>Enroll Now <FaArrowRight></FaArrowRight></button></Link>
                    </div>

                    <div className="col-lg-6 my-5">
                        <div id="carouselExampleControls" className="carousel slide  carousel-fade" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={slide5} className="d-block w-100 carimage" alt="img" />
                                </div>
                                <div className="carousel-item ">
                                    <img src={slide2} className="d-block w-100 carimage" alt="img" />
                                </div>
                                <div className="carousel-item ">
                                    <img src={slide3} className="d-block w-100 carimage" alt="img" />
                                </div>
                                <div className="carousel-item">
                                    <img src={slide1} className="d-block w-100 carimage" alt="img" />
                                </div>
                                <div className="carousel-item">
                                    <img src={slide4} className="d-block w-100 carimage" alt="img" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* project section ends  */}

        </div >
    );
};

export default Home;