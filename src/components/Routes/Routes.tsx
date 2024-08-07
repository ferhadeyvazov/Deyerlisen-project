import React from 'react'

import RenderIf from '../../utils/RenderIf';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import { RouterProvider } from 'react-router-dom';


const FAKE_AUTH = false;

const Routes: React.FC = () => {
    return (
        <>
            <RenderIf condition={FAKE_AUTH}>
                <RouterProvider router={PrivateRoutes} />
            </RenderIf>
            <RenderIf condition={!FAKE_AUTH}>
                <RouterProvider router={PublicRoutes} />
            </RenderIf>
        </>

    )

}



export default Routes