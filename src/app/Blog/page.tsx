import dynamic from 'next/dynamic'
import React from 'react'
import Loader from '../components/Loader'


const DynamicBlog = dynamic(() => import ('./BlogContainer'),{
  ssr:false,
  loading:() => <Loader/>
})
const page = () => {
  return (
    <div>
      <DynamicBlog/>
    </div>
  )
}

export default page