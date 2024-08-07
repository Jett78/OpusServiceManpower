import dynamic from 'next/dynamic'
import React from 'react'
import Loader from '../components/Loader'



export default function Page() {
  // const DynamicBlog = dynamic(() => import ('./BlogContainer'),{
  //   ssr:false,
  //   loading:() => <Loader/>
  // })
  return (

    <div>
      {/* <DynamicBlog/> */}
      hello
    </div>
  )
}


