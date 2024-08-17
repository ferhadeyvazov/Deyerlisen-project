import React from 'react';
import RenderIf from '@utils/RenderIf';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
import Loading from '@ui/Loading/Loading';

// const fakeAuth = import.meta.env.VITE_FAKE_AUTH;
const FAKE_AUTH = false;

const Routes: React.FC = () => {
    return (
        <>
            <RenderIf condition={FAKE_AUTH}>
                <React.Suspense fallback={<Loading />}>
                    <PrivateRoutes />
                </React.Suspense>
            </RenderIf>
            <RenderIf condition={!FAKE_AUTH}>
                <PublicRoutes />
            </RenderIf>
        </>

    )

}



export default Routes