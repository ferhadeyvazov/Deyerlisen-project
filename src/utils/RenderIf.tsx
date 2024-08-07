import React from 'react'

type IRenderIfProps = {
    condition: React.ReactNode;
    children: React.ReactNode;
    elseIf?: React.ReactNode;
}

const RenderIf: React.FC<IRenderIfProps> = ({condition, children, elseIf}) => {
  return (
    <React.Fragment>
        {
            condition
            ? <React.Fragment>{children}</React.Fragment>
            : <React.Fragment>{elseIf}</React.Fragment >
        }
    </React.Fragment>
  )
}

export default RenderIf