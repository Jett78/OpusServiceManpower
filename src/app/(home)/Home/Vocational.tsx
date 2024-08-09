"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
const Vocational = () => {

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".vocationalanimate",
        start: "top bottom",
        end: "50% 50%",
        scrub: 1,
        // markers: true,
      },
    });

    tl.from(".vocationalanimate", {
      scale: 0.5,
      opacity: 0,
      ease: "power2.out" 
    });
  });
  return (
   <main className='my-6'>
          <div className="vocationalanimate border bg-[url('/CTA.png')] shadow-md bg-black bg-opacity-80 bg-blend-overlay text-white bg-center flex flex-col justify-center items-center px-6 w-full h-[30em]">
         <div className="grid md:gap-6">
         <h2 className="lg:text-[46px] md:text-[40px] sm:text-[30px] text-2xl font-bold text-center">
          We Provide Vocational Training Services
        </h2>
        <h2 className="lg:text-[46px] md:text-[40px] sm:text-[30px] text-2xl font-bold text-center">
        with Our Manpower Solutions        </h2>
         </div>
        <p className="text-center font-medium text-sm text-gray-200 tracking-wider max-w-[42em] mx-auto md:py-8 py-4">
         Get your staff trained and certified at Opus Manpower
        </p>
       


       <div className="flex flex-wrap items-center justify-center sm:gap-6">
       <Link  href="https://wa.me/1234567890">
         <button className="px-6 py-3 border mx-auto rounded-full text-green-600  bg-white hover:bg-gray-300 font-bold flex items-center gap-2 border-green-600">
            <Image src="/whatsappicon.png" alt="whatsapp-icon" width={10000} height={1000} className="w-6" />
            <span>Get in touch</span>
          </button>
         </Link>
         {/* <Link href="/Contact">
              <button className=" w-[140px] border-white border font-bold h-[45px] my-3 flex items-center justify-center rounded-full cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#CC1587] before:via-[#26538C] before:to-[#00AFF0] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
                Contact Us
              </button>
            </Link> */}
       </div>
      </div>
   </main>
  )
}

export default Vocational