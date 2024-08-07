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

console.log("Private routes");

const PrivateRoutes = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/'>
            <Route index element={<Navigate to={"dashboard"} />} />
            <Route path='/dashboard'>
                <Route index element={<Dashboard />} />
            </Route>
            <Route path='*' element={<Navigate to={"dashboard"} />} />
        </Route>
    )
);

// const PrivateRoutes:React.FC = () => {
//   return <RouterProvider router={router} />
// }



export default PrivateRoutes