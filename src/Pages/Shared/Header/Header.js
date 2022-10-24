import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/d0d29493594148fd9a0e3c13fdc85c4c (3).png'
import './Header.css'
import { FaToggleOff, FaSun } from "react-icons/fa";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-white fixed-top py-3">
                <div className="container d-flex  justify-content-between align-items-center">
                    <div className="f-postion">
                        <Link className="navbar-brand" to="/">
                            <img className='img-fluid w-75' src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="s-position">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                <NavLink className={({ isActive }) => isActive ? 'home text-light py-1 py-lg-2 px-3' : 'text-muted mx-3 pt-2 text-decoration-none'} to='/home'>Home</NavLink>

                                <NavLink className={({ isActive }) => isActive ? 'home text-light py-1 py-lg-2 px-3' : 'text-muted mx-3 pt-2 text-decoration-none'} to='/courses'>Courses</NavLink>

                                <NavLink className={({ isActive }) => isActive ? 'home text-light py-1 py-lg-2 px-3' : 'text-muted mx-3 pt-2 text-decoration-none'} to='/faq'>FAQ</NavLink>

                                <NavLink className={({ isActive }) => isActive ? 'home text-light py-1 py-lg-2 px-3' : 'text-muted mx-3 pt-2 text-decoration-none'} to='/blog'>Blog</NavLink>

                                <NavLink className={'btn s-btn px-4 mt-3 mt-lg-0 ms-lg-5'} to='/login'>Login</NavLink>

                                <div className='d-flex align-items-center'>
                                    <NavLink className={' ms-3 text-decoration-none'} to='/courses'><FaToggleOff className='togcolor' /></NavLink>
                                    <small className=' mx-2 fw-bold'>Light <FaSun className='fs-4'></FaSun></small>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;