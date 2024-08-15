import React from 'react'
import {
    Navigate,
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
} from "react-router-dom";
// PAGES
import Auth from '../../pages/Auth';
import ForgetPassword from '@components/Public/ForgetPassword/ForgetPassword';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/'>
            <Route index element={<Navigate to={"auth"} />} />
            <Route path='/auth'>
                <Route index element={<Auth />} />
                <Route path='forgetPassword' element={<ForgetPassword />} />
            </Route>
            <Route path='*' element={<Navigate to={"auth"} />} />
        </Route>
    )
);

const PublicRoutes: React.FC = () => {
    return <RouterProvider router={router} />
}

export default PublicRoutes