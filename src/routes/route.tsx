import { Route, Routes } from 'react-router-dom'

import { Login } from "../pages/login"
import { NotFound } from "../pages/not-found"
import { FormLogin } from "../components/form-login"
import { ForgotPassord } from "../components/forgot-password"

export function Router() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} >
                <Route path="" element={<FormLogin />} />
                <Route path="esqueci-senha" element={<ForgotPassord />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes >
    )
}