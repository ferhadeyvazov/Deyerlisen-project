import React from 'react'
import {
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
            <Route index element={<Auth />} />
        </Route>
    )
);

const Routes:React.FC = () => {
  return <RouterProvider router={router} />
}

export default Routes