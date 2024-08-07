import dynamic from 'next/dynamic'
import React from 'react'
import Loader from '../components/Loader'


const DynamicBlog = dynamic(() => import ('./BlogContainer'),{
  ssr:false,
  loading:() => <Loader/>
})
export default function Page() {

  return (
    <div>
      <DynamicBlog/>
    </div>
  )
}


