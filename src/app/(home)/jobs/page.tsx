import React from 'react'
import dynamic from 'next/dynamic'
import Loader from '../components/Loader'


const DynamicJobs = dynamic(() => import ('./JobsContainer'),{
  ssr:false,
  loading:() => <Loader/>
})
const page = () => {
  return (
    <div className=''>
      <DynamicJobs/>
    </div>
  )
}

export default page