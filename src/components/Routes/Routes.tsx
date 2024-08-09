import React from 'react';
import RenderIf from '@utils/RenderIf';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const FAKE_AUTH = false;

const Routes: React.FC = () => {
    return (
        <>
            <RenderIf condition={FAKE_AUTH}>
                <PrivateRoutes/>
            </RenderIf>
            <RenderIf condition={!FAKE_AUTH}>
                <PublicRoutes />
            </RenderIf>
        </>

    )

}



export default Routes