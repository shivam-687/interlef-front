import React, { PropsWithChildren } from 'react'



const OfferStrip = ({children}: PropsWithChildren) => {
  return (
    <div className="bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 text-white p-2 text-lg flex items-center justify-center">
        {children}
    </div>
  )
}

export default OfferStrip