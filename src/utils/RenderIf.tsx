import React from 'react'

type IRenderIfProps = {
    condition: React.ReactNode;
    children: React.ReactNode;
    renderElse?: React.ReactNode;
}

const RenderIf: React.FC<IRenderIfProps> = ({ condition, children, renderElse }) => {
  return (
    <React.Fragment>
      {
        condition
          ? <React.Fragment>{children}</React.Fragment>
          : <React.Fragment>{renderElse}</React.Fragment>
      }
    </React.Fragment>
  )
}

export default RenderIf