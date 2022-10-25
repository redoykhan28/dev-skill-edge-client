import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import { FaFacebook, FaTwitter, FaInstagram, FaMailBulk } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='mt-5'>
            <footer className='p-4 text-center footerbg'>
                <div className='d-flex flex-column flex-md-row  justify-content-evenly pt-4'>
                    <Link className='text-decoration-none text-white fw-bold my-3 my-md-0' to={'/courses'}>Courses</Link>
                    <Link className='text-decoration-none text-white fw-bold my-3 my-md-0' to={'/faq'}>FAQ</Link>
                    <Link className='text-decoration-none text-white fw-bold my-3 my-md-0' to={'/blog'}>Blogs</Link>
                    <Link className='text-decoration-none text-white fw-bold my-3 my-md-0' to={'/login'}>SignIn</Link>
                    <Link className='text-decoration-none text-white fw-bold my-3 my-md-0' to={'/singup'}>Registration</Link>
                </div>
                <div className='mt-5 mb-2 d-flex justify-content-center'>
                    <a className='text-white mx-2' href="#"><FaFacebook></FaFacebook></a>
                    <a className='text-white mx-2' href="#"><FaTwitter></FaTwitter></a>
                    <a className='text-white mx-2' href="#"><FaInstagram></FaInstagram></a>
                    <a className='text-white mx-2' href="#"><FaMailBulk></FaMailBulk></a>
                </div>
                <hr className='text-white' />

                <p className='text-center text-white mt-5'>CopyRight Skill Edge 2022</p>
            </footer>
        </div>
    );
};

export default Footer;