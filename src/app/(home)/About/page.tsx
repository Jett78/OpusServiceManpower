import React from 'react'
import ABoutContainer from './ABoutContainer'
import Loader from '../components/Loader'
import dynamic from 'next/dynamic'

const DynamicAbout = dynamic(() => import ('./ABoutContainer'),{
  ssr:false,
  loading:() => <Loader/>
})
const page = () => {
  return (
    <div className='pt-20'>
      <DynamicAbout/>
    </div>
  )
}

export default page