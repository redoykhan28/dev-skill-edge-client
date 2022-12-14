import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../images/d0d29493594148fd9a0e3c13fdc85c4c (3).png'
import logo2 from '../../../images/headbgremove.png'
import './Header.css'
import { FaToggleOff, FaToggleOn, FaSun, FaMoon } from "react-icons/fa";
import { useContext } from 'react';
import { authContext } from '../../../Context/AuthContext';
import { modeContext } from '../../../Context/ModeContext';



const Header = () => {

    //use context
    const { signout, user } = useContext(authContext);
    const { mode, setMode } = useContext(modeContext)

    //signout
    const handleSignOut = () => {

        signout()
            .then(result => {

            })
    }

    //for dark mode
    const toogleHandlerDark = () => {

        setMode(true)
    }
    //for light mode
    const toogleHandlerLight = () => {

        setMode(false)
    }


    return (
        <div>
            <nav className={mode === true ? "navbar navbar-expand-lg dark-bg fixed-top py-3" : "navbar navbar-expand-lg bg-white fixed-top py-3"}>
                <div className="container d-flex  justify-content-between align-items-center">
                    <div className="f-postion">
                        <Link className="navbar-brand" to="/">
                            {
                                mode ?
                                    <img className='img-fluid w-75' src={logo2} alt="logo" />
                                    :
                                    <img className='img-fluid w-75' src={logo} alt="logo" />
                            }
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

                                <NavLink className={({ isActive }) => isActive ? 'home text-light py-1 py-lg-2 px-3' : 'text-muted mx-3 pt-2 text-decoration-none'} to='/blog'>Blogs</NavLink>

                                {/* condition for login  */}
                                {
                                    user
                                        ?
                                        <div className='px-4 d-flex align-items-center'>

                                            <img className='img-fluid rounded-circle tool  p-img' data-bs-placement='bottom' title={user.displayName} src={user?.photoURL} alt="img" />

                                            <li className="nav-item dropdown">
                                                <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                                                </Link>
                                                <ul className="dropdown-menu dropdown-menu-light">
                                                    <li><Link to={'/profile'} className="dropdown-item">Profile</Link></li>
                                                    <li><Link onClick={handleSignOut} className="dropdown-item">Logout</Link></li>
                                                </ul>
                                            </li>
                                        </div>
                                        :
                                        <NavLink className={({ isActive }) => isActive && mode ? 'btn clr2-btn text-white px-4 mt-3 mt-lg-0 ms-lg-5' : 'btn s-btn px-4 mt-3 mt-lg-0 ms-lg-5'} to='/login'>Login</NavLink>

                                }


                                {
                                    mode === true ?
                                        <div className='d-flex align-items-center'>
                                            <NavLink onClick={toogleHandlerLight} className={' ms-3 text-decoration-none'}><FaToggleOn className='togcolor' /></NavLink>
                                            <small className=' mx-2 fw-bold text-white'>Dark <FaMoon className='fs-4 text-white'></FaMoon></small>
                                        </div>

                                        :
                                        <div className='d-flex align-items-center'>
                                            <NavLink onClick={toogleHandlerDark} className={' ms-3 text-decoration-none'}><FaToggleOff className='togcolor' /></NavLink>
                                            <small className=' mx-2 fw-bold'>Light <FaSun className='fs-4'></FaSun></small>
                                        </div>
                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;