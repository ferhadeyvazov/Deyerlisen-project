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
        <Route path='/auth'>
            <Route index element={<Auth />} />
            <Route path='*' element={<Navigate to={'/auth'} />} />
        </Route>
    )
);

const PublicRoutes: React.FC = () => {
    console.log("Public routes");
    return <RouterProvider router={router} />
}

export default PublicRoutes