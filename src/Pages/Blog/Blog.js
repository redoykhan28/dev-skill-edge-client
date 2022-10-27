import React, { useContext } from 'react';
import { FaNewspaper } from "react-icons/fa";
import { modeContext } from '../../Context/ModeContext';
import image from '../../images/Bloggers and influencers writing articles.jpg'
import image2 from '../../images/Blogging-pana.png'
import './Blog.css'

const Blog = () => {

    //use context
    const { mode } = useContext(modeContext);

    return (
        <div className='container'>

            <div className="row">
                <div className="col-12 blogHead text-center">
                    <h3 className={mode ? 'text-center btxt3 mt-3' : 'text-center btxt'}>Welcome to our <span className='btxt2'>Blogs <FaNewspaper></FaNewspaper></span> </h3>
                    {
                        mode ?
                            <img className='img-fluid w-50' src={image2} alt="img" />
                            :
                            <img className='img-fluid w-75' src={image} alt="img" />

                    }
                </div>

                <div className={mode ? 'my-5 text-light w-75 mx-auto' : 'my-5 w-75 mx-auto'}>
                    <h4 className='my-5'>Blogs</h4>
                    <div className='mb-5'>
                        <h5 className='my-3'>1. what is cors?</h5>
                        <p><b>Answer:</b> Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                    </div>
                    <div className='mb-5'>
                        <h5 className='my-3'>2. Why are you using firebase? What other options do you have to implement authentication?</h5>
                        <p><b>Answer:</b> Firebase provides a customizable, open source, drop-in auth solution that handles the UI flows for signing in users. The FirebaseUI Auth component implements best practices for authentication on mobile devices and websites, which can maximize sign-in and sign-up conversion for your app.</p>
                        <p>
                            there are also some other options like,Smart Lock and Chrome Password Manager, Firebase security applies Google's internal expertise of managing one of the largest account databases in the world.its also provide Advanced features available with Google Cloud Identity Platform

                        </p>
                    </div>
                    <div className='mb-5'>
                        <h5 className='my-3'>3. How does the private route work?</h5>
                        <p><b>Answer:</b> The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                    </div>
                    <div className='mb-5'>
                        <h5 className='my-3'>4. What is Node? How does Node work?</h5>
                        <p><b>Answer:</b> Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</p>
                        <p>
                            It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. Working of Node.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;