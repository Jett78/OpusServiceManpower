import dynamic from 'next/dynamic'
import React from 'react'
import Loader from '../components/Loader'

const DynamicContact = dynamic(() => import ('./ContactContainer'),{
  ssr:false,
  loading:() => <Loader/>
})
const page = () => {
  return (
    <div>
      <DynamicContact/>
    </div>
  )
}

export default page