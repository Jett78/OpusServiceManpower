"use client"
import React, { useRef } from "react";
import { TbDeviceVisionPro } from "react-icons/tb";
import { GoGoal } from "react-icons/go";
import Image from "next/image";
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
const Vision = () => {
  const visions = useRef<any>(null)

  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: visions.current,
        start: "top bottom",
        end: "50% 50%",
        scrub: 1,
        // markers: true,
      },
    });

    tl.from(visions.current?.children,{
      stagger:0.5,
      y:60,
      opacity:0,
    })

    gsap.from(".textright",{
      opacity:0,
      x:200,
      duration:1.5,
    })
    gsap.from(".imgleft",{
      opacity:0,
      x:-200,
      duration:1.5,
    })
  })
  return (
    <main className="">
      <h2 className="text-black uppercase font-extrabold text-3xl w-fit mx-auto md:mb-10 ">
        <span className="text-gradient">About {""}</span> 
      </h2>
      <section className="w-11/12 mx-auto flex flex-wrap flex-row-reverse justify-center gap-8 items-start">
        <div className="textright lg:w-[50%] w-full">
          <div className="h-[24px] overflow-hidden mb-2"></div>
          <h1 className="header lg:text-5xl md:text-4xl sm:text-3xl  text-2xl font-bold leading-[1.1em]">
            Outsourcing and outstaffing solutions for sustainable
            <span className="text-gradient"> Business Growth.</span>
          </h1>
          <p className="about-desc font-medium xl:text-l md:text-l text-sm text-lighttext my-6">
            In today’s rapidly evolving business landscape, companies are
            increasingly turning to outsourcing and outstaffing as strategic
            solutions to drive growth, optimize operations, and maintain a
            competitive edge. Both approaches offer distinct advantages that can
            contribute to sustainable business growth, yet they cater to
            different needs and objectives. Outsourcing involves delegating
            specific business processes or tasks to external service providers,
            allowing companies to leverage specialized expertise, reduce costs,
            and focus on core competencies. This model is particularly
            beneficial for functions such as IT support, customer service, and
            accounting, where external providers can offer high-quality services
            at a lower cost compared to maintaining an in-house team. By
            outsourcing non-core activities, companies can streamline
            operations, enhance efficiency, and allocate resources more
            effectively to strategic initiatives.
            allowing companies to leverage specialized expertise, reduce costs,
            and focus on core competencies. This model is particularly
            beneficial for functions such as IT support, customer service, and
            accounting, where external providers can offer high-quality services
            at a lower cost compared to maintaining an in-house team. By
            outsourcing non-core activities, companies can streamline
            operations, enhance efficiency, and allocate resources more
            effectively to strategic initiatives.
          </p>
        </div>

        <div className="imgleft about-img-animate sm:w-[45%] lg:block hidden">
          <Image
            src="/chairman.jpg"
            alt="chairman"
            height={1000}
            width={1000}
            className="rounded-lg sm:w-[60em] sm:h-[35em] object-cover brightness-75"
          />
        </div>
      </section>

      {/* parallax background */}
      <div className="parallaxbg bg-parallax2 bg-fixed sm:max-h-[30vh] bg-cover bg-black bg-blend-overlay bg-opacity-50 mt-20">
        <div className="text-white grid sm:grid-cols-4 grid-cols-2 items-center justify-center gap-x-4 gap-y-14 py-16">
          {details.map((item, index) => (
            <div key={index} className="grid place-items-center">
              <h2 className="font-extrabold lg:text-6xl md:text-4xl text-3xl">
                {item.num}
              </h2>
              <h3 className="font-extrabold sm:text-l text-[12px] uppercase pt-2 whitespace-nowrap">
                {item.text}
              </h3>
            </div>
          ))}
        </div>
      </div>



      <div className=" md:py-40 py-20  bg-gray-50">
        <div className="w-11/12 mx-auto flex flex-wrap justify-center md:gap-8 gap-12" ref={visions}>
        {aboutdata.map((item, index) => (
          <div key={index} className="relative group">
            <div
              className="rounded-2xl max-w-[22em] h-[20em] p-4 relative "
              style={{ border: `2px solid ${item.border}` }}
            >
              <div className="h-20 w-20 flex items-center justify-center rounded-full gradient mb-6 absolute -top-10 left-1/2 -translate-x-1/2 z-10">
                <div className="text-white text-3xl ">{item.img}</div>
              </div>
              <h2 className="font-bold text-3xl text-center mt-10  group-hover:text-white relative z-10">
                {item.title}
              </h2>
              <p className="font-semibold text-black italic text-sm my-4 leading-6 group-hover:text-white relative z-50">
                {item.desc}
              </p>
              <div className="z-0 absolute bg-gradient-to-r from-[#26538C]  to-[#00AFF0]  w-full right-0 group-hover:h-full rounded-lg bottom-0 duration-500 ease-in-out transform scale-x-0  group-hover:scale-x-100 origin-bottom" />
            </div>
          </div>
        ))}
        </div>
      </div>
    </main>
  );
};

export default Vision;

const details = [
  {
    num: "2010",
    text: "Incorporation year",
  },
  {
    num: "6+",
    text: "Global Location",
  },
  {
    num: "5000+",
    text: "Clients Served",
  },
  {
    num: "45,000+",
    text: "Total Deployed",
  },
];

const aboutdata = [
  {
    title: "Our Vision",
    desc: "We envision a future where our clients can seamlessly access top-tier talent, cutting-edge technology, and strategic expertise, allowing them to focus on their core business objectives while we handle the complexities of workforce management.",
    border: "#CC1587",
    img: <TbDeviceVisionPro />,
  },
  {
    title: "Our Mission",
    desc: "We seek to provide our clients with the flexibility they need to adapt to changing market conditions and business requirements. Our solutions are designed to be agile and scalable, ensuring that our clients can respond quickly to new opportunities and challenges..",
    border: "#26538C",
    img: <GoGoal />,
  },
  {
    title: "Our Goals",
    desc: "Our primary goal is to provide unparalleled value to our clients through high-quality, customized outsourcing and outstaffing solutions. We aim to exceed expectations by understanding our clients' unique needs and delivering services that drive tangible results.",
    border: "#00AFF0",
    img: <GoGoal />,
  },
];
