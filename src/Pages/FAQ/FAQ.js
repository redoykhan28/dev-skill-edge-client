import React, { useContext } from 'react';
import { modeContext } from '../../Context/ModeContext';
import './FAQ.css'

const FAQ = () => {
    //state for dark and light mode
    const { mode } = useContext(modeContext);

    return (
        <div className={mode ? 'container pt-3 w-75 mx-auto' : 'container w-75 mx-auto'}>

            <h2 className='text-primary text-center ftxt'>Skilled Edge Frequently Asked Questions</h2>
            <div className={mode ? 'text-white' : ''}>
                <div className='mt-5 mb-4'>
                    <h3 className='my-4 text-primary'>Payments</h3>
                    <h5 className='my-2 text-primary'>Q. How do I purchase a course?</h5>
                    <p>A. To purchase your course online just follow the link. Online purchases can either be paid for immediately by credit/debit card, you can nominate somebody else to pay on your behalf, or an invoice can be requested. RQA Members login using their existing membership number and password. Non RQA Members must register their details first.</p>
                </div>

                <div>
                    <div className='mt-5 mb-4'>
                        <h3 className='my-4 text-primary'>Access</h3>
                        <h5 className='my-2 mb-3 text-primary'>Q. How do I access the courses I have paid for?</h5>
                        <p>A. After paying for your order in full you will be given access to your course. Please click 'get premium access' at the details course of the page. </p>

                        <h5 className='my-2 mb-3 text-primary'>Q. How long do I have access to my purchased course?
                        </h5>
                        <p>A. You have access to the courses you have purchased indefinitely.  Access to the assessment will be for a 12-month period from the date of purchase.
                        </p>

                        <h5 className='my-2 mb-3 text-primary'>Q. Do I have to complete a course in one go?
                        </h5>
                        <p>. No, you can visit it at anytime, wherever you are. Each course is made up of a number of individual modules which enables you to complete it in your own time and at times convenient to you. If you wish to return to the course at the point you last left it at, please ensure you use the same device to access the course and do not clear your cache in between visits.
                        </p>

                        <h5 className='my-2 mb-3 text-primary'>Q. Is my purchased course transferable?
                        </h5>
                        <p>. A. No. Your course cannot be transferred to anyone else.

                            For Corporate licences please contact the RQA office.
                        </p>
                    </div>

                    <div>
                        <h3 className='my-4 text-primary'>Certificate</h3>
                        <h5 className='my-2 mb-3 text-primary'>Q. Do I receive a certificate?</h5>
                        <p>A. Yes. The majority of our eLearning courses have CPD accredited assessments with the ability to print a certificate once the assessment has been passed (80% pass mark). The below courses are CPD accredited but do not include assessments, for these courses a certificate of participation is accessable at the end of the last module.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FAQ;