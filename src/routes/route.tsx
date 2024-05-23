import { Navigate, Route, Routes } from 'react-router-dom'

import { Login } from '../pages/login'
import { NotFound } from '../pages/not-found'
import { FormLogin } from '../components/form-login'
import { ForgotPassword } from '../components/forgot-password'

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />}>
                <Route index element={<FormLogin />} />
                <Route path="esqueci-senha" element={<ForgotPassword />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
