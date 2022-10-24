import React from 'react';
import { Link } from 'react-router-dom';
import headerImage from '../../../images/3785210.jpg'
import './Home.css'

const Home = () => {
    return (
        <div>
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
                        <img className='img-fluid heroImg' src={headerImage} alt="img" />
                    </div>
                </div>
            </section >
            {/* hero section end  */}

            <section className='courses' id='courses'>
                <h3 className='text-center'>Explore Our leatest courses</h3>
            </section>


        </div >
    );
};

export default Home;