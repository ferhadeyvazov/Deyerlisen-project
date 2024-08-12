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
            <React.Suspense fallback={<Loading />}>
                <RenderIf condition={FAKE_AUTH}>
                    <PrivateRoutes />
                </RenderIf>
                <RenderIf condition={!FAKE_AUTH}>
                    <PublicRoutes />
                </RenderIf>
            </React.Suspense>
        </>

    )

}



export default Routes