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
    <div>
      <DynamicAbout/>
    </div>
  )
}

export default page