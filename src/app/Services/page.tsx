import React from 'react'
import Loader from '../components/Loader'
import dynamic from 'next/dynamic'


const DynamicService = dynamic(() => import ('./ServicesContainer'),{
  ssr:false,
  loading:() => <Loader/>
})
const page = () => {
  return (
    <div>
      <DynamicService/>
    </div>
  )
}

export default page