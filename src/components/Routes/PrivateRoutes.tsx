import React from 'react'
import {
    Navigate,
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
} from "react-router-dom";
// PAGES
import Dashboard from '../../pages/Dashboard'


const router = createBrowserRouter(
    createRoutesFromElements(
            <Route path='/dashboard'>
                <Route index element={<Dashboard />} />
                <Route path='*' element={<Navigate to={'/dashboard'} />} />
            </Route>
    )
);

const PrivateRoutes:React.FC = () => {
    console.log("Private routes");
  return <RouterProvider router={router} />
}



export default PrivateRoutes