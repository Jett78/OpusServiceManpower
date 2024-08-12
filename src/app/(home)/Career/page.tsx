import React from 'react'
import Loader from '../components/Loader'
import dynamic from 'next/dynamic'


const DynamicCareer = dynamic(() => import ('./CareerContainer'),{
  ssr:false,
  loading:() => <Loader/>
})
const page = () => {
  return (
    <div className='pt-20'>
      <DynamicCareer/>
    </div>
  )
}

export default page