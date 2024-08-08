import React from 'react'
import { AiOutlineDownload } from "react-icons/ai";

import Image from 'next/image'

const Certificates = () => {
  return (
   <main className='w-11/12 mx-auto md:my-3 my-10'>
    <h2 className="font-extrabold text-2xl uppercase w-fit mx-auto text-gradient">Certificates</h2>
    <p className="font-medium text-md max-w-[60em] md:mx-auto mx-2 sm:text-l text-sm py-2 text-center">Each certificate represents our team's proficiency in their respective fields, ensuring that we deliver top-notch solutions and services to our clients.</p>
    <div className='flex flex-wrap justify-center gap-8 my-20'>
       

        <Image src="/certificate.jpg"height={1000}  width={1000}  alt="certificate" className='h-[25em] w-80 drop-shadow-lg'/>
        <Image src="/certificate.jpg"height={1000}  width={1000}  alt="certificate" className='h-[25em] w-80 drop-shadow-lg'/>
        <Image src="/certificate.jpg"height={1000}  width={1000}  alt="certificate" className='h-[25em] w-80 drop-shadow-lg'/>
   
    </div>
    <button className="flex gap-2 w-[250px] mx-auto bg-black font-bold h-[60px] my-16 flex items-center justify-center rounded-full cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#CC1587] before:via-[#26538C] before:to-[#00AFF0] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
    <AiOutlineDownload size={32}/>Company Profile
              </button>
   </main>
  )
}

export default Certificates