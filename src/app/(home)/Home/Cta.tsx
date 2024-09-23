"use client"
import Link from "next/link";
import Image from "next/image";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
const Cta = () => {
  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger:".ctanimate",
        start: "top bottom",
        end: "50% 50%",
        scrub: 1,
        // markers: true,
      },
    });

   if(window.innerWidth >=768){
    tl.from(".ctaanimateleft",{
      x:-40,
      opacity:0.5,
    })
    tl.from(".ctanimateright",{
      x:40,
      opacity:0.5,
    })
  }
  })
  return (
    <main className=" mx-auto mt-20">
   


<section className="ctanimate overflow-hidden bg-gray-50 md:grid md:grid-cols-2 place-items-center">
  <div className="ctaanimateleft p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl md:text-left text-center">
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
       Boost Your Productivity With Our Manpower Solutions
      </h2>

      <p className="hidden text-gray-500 md:mt-4 sm:block">
      Enhance your efficiency with our Opus manpower services. From temporary to long-term staffing, we’ve got the talent you need. Contact us today!
       
      </p>

       <div className="flex flex-wrap items-center justify-center md:justify-start sm:gap-6 mt-4">
       <Link  href="https://wa.me/1234567890">
         <button className="px-6 py-3 border mx-auto rounded-full text-green-600  bg-white hover:bg-green-200 font-bold flex items-center gap-2 border-green-600">
            <Image src="/whatsappicon.png" alt="whatsapp-icon" width={10000} height={1000} className="w-6" />
            <span>Whatsapp Now</span>
          </button>
         </Link>
         <Link href="/Contact">
              <button className=" w-[140px] border-white bg-tertiary border font-bold h-[45px] my-3 flex items-center justify-center rounded-full cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#CC1587] before:via-[#26538C] before:to-[#00AFF0] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
                Contact Us
              </button>
            </Link>
       </div>
    </div>
  </div>

  <Image
    alt="tech-image"
    src="/cta.webp"
    width={1000}
    height={1000}
    className="ctanimateright md:block hidden h-56 w-full object-cover sm:h-full"
  />
</section>
    </main>
  );
};

export default Cta;
