import React from 'react'
import { MdPhoneCallback } from 'react-icons/md'

const CtaButton = () => {
  return (
    <button className="btn md:btn-lg btn-primary shadow-lg shadow-primary/20 gap-2"><MdPhoneCallback className='text-2xl' />Get Callback</button>
  )
}

export default CtaButton