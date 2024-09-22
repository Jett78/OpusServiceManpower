import React from 'react'
import Vision from "./Vision"
import OurTeam from './OurTeam'
import TrustComponent from './TrustComponent'
import HowweWork from './HowweWork'
import Certificates from './Certificates'
import Countries from './Countries'




const ABoutContainer = () => {
  return (
    <div className='pt-10'>
      <Vision/>
      <HowweWork/>
      <TrustComponent/>
      <OurTeam/>
      <Countries/>
      <Certificates/>  
    </div>
  )
}

export default ABoutContainer