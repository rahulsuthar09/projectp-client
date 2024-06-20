import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

/** Loaders  */
import Loadable from '../Components/Loader/Loadable'
import ListSkeltonLoader from '../Components/Loader/ListSkeltonLoader'

/****Layouts*****/
const FullLayout = Loadable(lazy(async () => import('../Components/Layouts/FullLayout')))
const BlankLayout = Loadable(lazy(async () => import('../Components/Layouts/BlankLayout')))
const Dashboard = Loadable(lazy(async() => import('../pages/home/Dashboard')))

/** Error / Maintanence */
const Error = Loadable(lazy(async () => import('../pages/Error')))
const Maintanence = Loadable(lazy(async() => import('../pages/Maintanence')))

/** Auth */
const Login = Loadable(lazy(async () => import('../pages/auth/Login')))
const Register = Loadable(lazy(async() => import('../pages/auth/Register')))
const Forgot = Loadable(lazy(async() => import('../pages/auth/Forgot')))


/** Added Delay to check lazy behaviour */
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const Users = Loadable(lazy(async() => {
    await delay(2000)
    return import('../pages/users/Users')
}), <ListSkeltonLoader />)


/*****Routes******/

const Routes = [
    {
        path: '/',
        element: <FullLayout />,
        children: [
            { path: '/', name: 'Dashboard', exact: true, element: <Dashboard /> },
            {   
                path: '/users', 
                children: [
                    {
                        path: '',
                        exact: true,
                        name: 'Users',
                        element: <Users />
                    }
                ]
            },
            { path: '*', element: <Navigate to="/error/404" /> },
        ]
    },
    {
        path: '/auth',
        element: <BlankLayout />,
        children: [
            { path: 'login', name: 'Login', element: <Login /> },
            { path: 'register', name: 'Register', element: <Register /> },
            { path: 'forgot-password', name: 'Forgot Password', element: <Forgot /> },
        ]
    },
    {
        path: '/error',
        element: <BlankLayout />,
        children: [
            { path: '404', name: 'Error - 404', element: <Error /> },
            { path: 'maintenance', name: 'Maintenance', element: <Maintanence /> },
        ]
    }
];

export default Routes;
