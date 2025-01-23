import React from 'react'
import Image from 'next/image'
import Logo from '@/public/Logo/Orange.svg'

const page = () => {
  return (
    <div>
        OUTLOUD
        <Image alt='OUTLOUD' src={Logo}/>
    </div>
  )
}

export default page
