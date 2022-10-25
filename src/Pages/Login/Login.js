import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import logo1 from '../../images/facebook_logos_PNG19753.png'
import logo2 from '../../images/GitHub-Mark.png'

const Login = () => {

    //submit button handling
    const submitHandler = (e) => {

        e.preventDefault();
        let form = e.target;
        let email = form.email.value;
        let password = form.password.value;
        console.log(email, password)
    }

    return (
        <div className='container'>
            <div className="card  p-3 loginCard">

                <div className="card-body">
                    <h5 className='mb-5'>Login</h5>
                    <form onSubmit={submitHandler}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label input">Email address</label>
                            <input name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input name='password' type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <Link className='text-decoration-none'><small className='clr '>Forget Password</small></Link>

                        <button type="submit" className="btn mt-4 rounded-0 logbtn">Login</button>

                        <p className='text-center mt-5'><small>Don't Have an Account?<Link to={'/signup'} className='clr text-decoration-none '> Create Account</Link> </small></p>
                    </form>
                </div>
            </div>
            <p className='text-center my-4'><small>or</small></p>

            <div className='d-flex justify-content-center social'>
                <img className='img-fluid logo ms-2' src={logo1} alt="logo" />
                <p className='mt-2'>Continiue with Facebook</p>
            </div>
            <div className='d-flex justify-content-center mt-3 social'>
                <img className='img-fluid logo2 me-1' src={logo2} alt="logo" />
                <p className='mt-2'>Continiue with GitHub</p>
            </div>
        </div>

    );
};

export default Login;