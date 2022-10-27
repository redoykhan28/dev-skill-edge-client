import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../Context/AuthContext';
import toast, { Toaster } from 'react-hot-toast';
import './SignUp.css'
import { modeContext } from '../../Context/ModeContext';

const SignUp = () => {

    //state for error
    const [error, setError] = useState(null)

    //state for success
    const [success, setSuccess] = useState(null)


    //use context
    const { emailPassSignup, updateUser } = useContext(authContext)
    const { mode } = useContext(modeContext)


    //submit button handling
    const submitHandler = (e) => {

        e.preventDefault();
        let form = e.target;
        let name = form.name.value
        let email = form.email.value;
        let photo = form.photo.value
        let password = form.password.value;
        // console.log(name, email, photo, password)

        if (password.length < 8) {

            setError('Password Should be 8 lenght long!')
            return
        }

        //setup signup
        emailPassSignup(email, password)
            .then(result => {

                const user = result.user
                console.log(user)
                form.reset();
                setSuccess('Signup Successful')
                handleProfile(name, photo)
                setError(null)
            })
            .catch(err => {
                console.log(err)
                setError('Email is already in use')
            })
    }

    //update profile
    const handleProfile = (name, photo) => {

        updateUser(name, photo)
            .then(() => console.log('Profile updated:', name, photo))
            .catch(err => console.log(err))
    }

    return (
        <div className={mode ? 'container pt-5 ' : 'container '}>
            <div className={mode ? "card  p-3 loginCard2" : "card  p-3 loginCard"}>

                <div className="card-body">
                    <h5 className='mb-5'>SignUp</h5>
                    <form onSubmit={submitHandler}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail" className="form-label input">Full Name</label>
                            <input name='name' type="text" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label input">Email address</label>
                            <input name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label input">Photo Url</label>
                            <input name='photo' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input name='password' type="password" className="form-control" id="exampleInputPassword1" required />
                        </div>

                        <button type="submit" className="btn mt-4 mb-2 rounded-0 signUpbtn">SignUp</button>
                        <small className='text-danger'>{error}</small>
                        <small className='text-success'>{success}</small>


                        <p className='text-center mt-5'><small>Already have an account?<Link to={'/login'} className='clr2 text-decoration-none '> Login</Link> </small></p>
                    </form>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default SignUp;