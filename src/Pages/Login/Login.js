import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import logo1 from '../../images/7123025_logo_google_g_icon.png'
import logo2 from '../../images/657790_circles_code_github_line_neon_icon.png'
import { useContext } from 'react';
import { authContext } from '../../Context/AuthContext';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { modeContext } from '../../Context/ModeContext';


const Login = () => {

    //set state for error
    const [error, setError] = useState(null);

    //state for mail
    const [mail, setMail] = useState(null);


    //use navigation
    const navigate = useNavigate();

    //use location
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/home';

    //use context
    const { googleSignin, emailPassLogin, githubSignin, passwordReset } = useContext(authContext);
    const { mode } = useContext(modeContext)


    // google signin 
    const googleProvider = new GoogleAuthProvider()

    const handleGoogle = () => {

        googleSignin(googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(err => {

                console.log(err)
            })

    }

    //git signin
    const gitProvider = new GithubAuthProvider()

    const handleGit = () => {

        githubSignin(gitProvider)
            .then(result => {

                const user = result.user;
                console.log(user)
            })
            .catch(err => {

                console.log(err)
            })

    }

    //submit button handling
    const submitHandler = (e) => {

        e.preventDefault();
        let form = e.target;
        let email = form.email.value;
        let password = form.password.value;
        // console.log(email, password)

        emailPassLogin(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset();
                setError(null)
                toast.success('Login Successful');
                navigate(from, { replaced: true })
            })
            .catch(err => {

                console.log(err)
                setError(err.message)
            })
    }

    //take value from email
    const handleEmail = (e) => {

        const email = e.target.value;
        console.log(email)
        setMail(email);
    }

    //reset password
    const setupPsd = () => {

        passwordReset(mail)
            .then(() => {

                toast.success('Check your email to reset your password')
                setError(null)
            })
            .catch(err => {

                console.log(err);
                setError('Please type your email')
            })

    }

    return (
        <div className={mode ? 'container pt-5 ' : 'container '}>
            <div className={mode ? "card  p-3 loginCard2" : "card  p-3 loginCard"}>

                <div className="card-body">
                    <h5 className='mb-5'>Login</h5>
                    <form onSubmit={submitHandler}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label input">Email address</label>
                            <input onBlur={handleEmail} name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input name='password' type="password" className="form-control" id="exampleInputPassword1" required />
                        </div>

                        <Link onClick={setupPsd} className='text-decoration-none'><small className='clr '>Forget Password</small></Link>

                        <button type="submit" className="btn mt-4 mb-2 rounded-0 logbtn">Login</button>
                        <small className='text-danger'>{error}</small>


                        <p className='text-center mt-5'><small>Don't Have an Account?<Link to={'/signup'} className='clr text-decoration-none '> Create Account</Link> </small></p>
                    </form>
                </div>
            </div>
            <p className='text-center my-4'><small>or</small></p>

            <div onClick={handleGoogle} className={mode ? 'd-flex justify-content-center text-white social' : 'd-flex justify-content-center social'}>
                <img className='img-fluid logo ms-2' src={logo1} alt="logo" />
                <p className='mt-2'>Continiue with Google</p>
            </div>
            <div onClick={handleGit} className={mode ? 'd-flex justify-content-center text-white social' : 'd-flex justify-content-center social'}>
                <img className='img-fluid logo2 me-1 ms-3' src={logo2} alt="logo" />
                <p className='mt-2'>Continiue with GitHub</p>
            </div>
            <Toaster />
        </div>

    );
};

export default Login;