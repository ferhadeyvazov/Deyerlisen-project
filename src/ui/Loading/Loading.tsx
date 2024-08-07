import React from 'react';
import BarLoader from 'react-spinners/BarLoader'

const override = {
    'borderRadius': '10px',
    'display': 'block',
    'margin': '100px auto'
}

const Loading:React.FC = ({loading}:any) => {
    return (
        <>
            <BarLoader
                loading={loading}
                color="#009946"
                cssOverride={override}
                height={10}
                speedMultiplier={3}
                width={250}
            />
        </>
    )
}

export default Loading