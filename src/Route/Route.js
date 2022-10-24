import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home"
import Courses from "../Pages/Courses/Courses"
import FAQ from "../Pages/FAQ/FAQ"
import Blog from "../Pages/Blog/Blog"
import Login from "../Pages/Login/Login"
import SignUp from "../Pages/SignUp/SignUp"

//setup route
export const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/home',
                element: <Home></Home>
            },

            {
                path: '/courses',
                element: <Courses></Courses>
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