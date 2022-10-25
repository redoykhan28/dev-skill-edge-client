import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home"
import Courses from "../Pages/Courses/Courses"
import FAQ from "../Pages/FAQ/FAQ"
import Blog from "../Pages/Blog/Blog"
import Login from "../Pages/Login/Login"
import SignUp from "../Pages/SignUp/SignUp"
import CoursePerCat from "../Pages/Courses/CoursePerCat/CoursePerCat";
import CourseDetails from "../Pages/Courses/CourseDetails/CourseDetails";
import Checkout from "../Pages/Courses/CheckOut/Checkout";

//setup route
export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://skill-edge-server.vercel.app/course')
            },

            {
                path: '/home',
                element: <Home></Home>,
                loader: () => fetch('https://skill-edge-server.vercel.app/course')
            },

            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://skill-edge-server.vercel.app/course')
            },

            {
                path: '/coursePerCat/:id',
                element: <CoursePerCat></CoursePerCat>,
                loader: ({ params }) => fetch(`https://skill-edge-server.vercel.app/courseByCategory/${params.id}`)
            },

            {
                path: '/details/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://skill-edge-server.vercel.app/courseDetails/${params.id}`)

            },

            {
                path: 'checkout/:id',
                element: <Checkout></Checkout>,
                loader: ({ params }) => fetch(`https://skill-edge-server.vercel.app/courseDetails/${params.id}`)
            },

            {
                path: '/faq',
                element: <FAQ></FAQ>
            },

            {
                path: '/blog',
                element: <Blog></Blog>
            },

            {
                path: '/login',
                element: <Login></Login>
            },

            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ]
    }
])