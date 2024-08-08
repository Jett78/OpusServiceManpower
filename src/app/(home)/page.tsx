import React from 'react'
import dynamic from 'next/dynamic'
import Loader from './components/Loader'

const HomePage = dynamic(() => import ('./Home/Page'),{
  ssr:false,
  loading:() => <Loader/>
})
const page = () => {
  return (
    <div>
          <HomePage/>
    </div>
  )
}

export default page