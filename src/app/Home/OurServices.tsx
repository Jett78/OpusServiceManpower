"use client"
import React, { useRef } from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";


gsap.registerPlugin(ScrollTrigger);
const OurServices = () => {
  const mainRef = useRef(null);

  useGSAP(() => {
    const main = mainRef.current;
    gsap.to(main, {
      scrollTrigger: {
        trigger: main,
        start: "center center",
        end: () => `+=${main.scrollWidth * 1}`,
        pin: true,
        scrub: 2,
      },
      x: "-2800px",
    });
  }, []);

  return (
    <main ref={mainRef} className="pl-24 my-28 flex items-center gap-20  ">
    <section className='flex flex-col justify-between gap-20'>
       <div>
       <div className="flex items-center gap-4 w-[25em]">
        <h2 className="font-bold text-4xl text-gradient uppercase">Our Services</h2>
        <p className="border-2 border-primary rounded-full h-10 w-10 flex justify-center items-center">
        <FaArrowRightLong />
          </p>
      </div>
      <p className="text-left text-2xl font-medium w-[16em] mt-4">
        A selection of our crafted work, built from scratch by our talented
        team.
      </p>
       </div>
      <button className="w-[140px] bg-black font-bold h-[45px] my-3 flex items-center justify-center rounded-full cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#CC1587] before:via-[#26538C] before:to-[#00AFF0] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
            View More
          </button>
    </section>

    <section className="flex gap-4 overflow-x-clip">
      {services.map((item, index) => (
        <div key={index} className="relative w-[32em] h-[35em] flex-shrink-0  cursor-pointer overflow-hidden">
          <Image
            src={item.img}
            alt="scroll-images"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl hover:scale-110 ease-in-out duration-300"
          />
          
          <div className="w-full h-full absolute inset-0 text-white rounded-3xl  bg-gradient-to-b from-transparent via-transparent to-black">
            <div className="absolute bottom-12 left-8">
              <h2 className="font-bold text-2xl">{item.title}</h2>
            </div>
          </div>
        </div>
      ))}
    </section>

  </main>
  )
}

export default OurServices

const services = [
  {
    title: "Oil & Gases",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
    img: "/servicesimg/services1.jpg",
  },
  {
    title: "Construction Service",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
    img: "/servicesimg/services2.jpg",
  },
  {
    title: "Industrial Services",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
    img: "/servicesimg/services3.jpg",
  },
  {
    title: "Health Services",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
    img: "/servicesimg/services4.jpg",
  },
  {
    title: "Information & Technology",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
    img: "/servicesimg/services2.jpg",
  },
  {
    title: "Accomodation & Transformation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
    img: "/servicesimg/services1.jpg",
  },
  {
    title: "Blue-Collar & White-Collar Services",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendisodio aut porro provident placeat, aliquid tempora ea unde earumneque incidunt est, ratione nostrum. Expedita consequatur doloremlabore beatae aut!",
    img: "/servicesimg/services3.jpg",
  },
];