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

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/'>
            <Route index element={<Navigate to={"auth"} />} />
            <Route path='/auth'>
                <Route index element={<Auth />} />
            </Route>
            <Route path='*' element={<Navigate to={"auth"} />} />
        </Route>
    )
);

const PublicRoutes: React.FC = () => {
    return <RouterProvider router={router} />
}

export default PublicRoutes