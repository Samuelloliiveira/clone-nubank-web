import { createBrowserRouter } from 'react-router-dom'

import { Login } from '../pages/login'
import { NotFound } from '../pages/not-found'
import { FormLogin } from '../components/form-login'
import { ForgotPassword } from '../components/forgot-password'
import { AccessQRMobile } from "../components/access-qr-mobile"
import { Home } from "../pages/home"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
        children: [
            { path: '/', element: <FormLogin /> },
            { path: '/esqueci-senha', element: <ForgotPassword /> },
            { path: '/acesso-qr-celular', element: <AccessQRMobile /> },
        ],
    },
    { path: "/home", element: < Home /> },
    { path: "*", element: < NotFound /> },
])
