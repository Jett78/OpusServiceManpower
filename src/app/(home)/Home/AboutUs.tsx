"use client";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger as GSAPScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Link from "next/link";
import CountUp from 'react-countup'
import ScrollTrigger from "react-scroll-trigger"
import { useInView } from 'react-intersection-observer';


gsap.registerPlugin(GSAPScrollTrigger);

const AboutUs: React.FC = () => {
  const counterRef = useRef<any>(null);
  const aboutContainer = useRef<any>(null);
  const [CounterOn,setCounterOn] = useState(false)
  const { ref, inView } = useInView({ triggerOnce: true });


  // useGSAP(() => {
  //   const descSplit = new SplitType(".about-desc");

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: aboutContainer.current,
  //       start: "top bottom",
  //       end: "40% 40%",
  //       scrub: 1,
  //       // markers: true,
  //     },
  //   });

  //   tl.from(".about", {
  //     opacity: 1,
  //     y: 24,
  //     duration: 1,
  //   });
  //   tl.from(".header", {
  //     opacity: 0,
  //     x: -20,
  //     duration: 1,
  //   });

  //   tl.from(
  //     descSplit.chars,
  //     {
  //       duration: 1,
  //       opacity: 0,
  //       stagger: 0.2,
  //     },
  //     "<"
  //   );

  //   //img-reveal animation
  //   gsap.fromTo(
  //     ".about-img-animate",
  //     {
  //       clipPath: "inset(0 0 100% 0)",
  //       opacity: 1,
  //     },
  //     {
  //       clipPath: "inset(0 0 0% 0)",
  //       opacity: 1,
  //       duration: 4,
  //       scrollTrigger: {
  //         trigger: ".about-img-animate",
  //         start: "top 70%",
  //         end: "bottom bottom",
  //         scrub: 1,
  //         // markers: true,
  //       },
  //     }
  //   );

  //   // gsap.fromTo(
  //   //   ".parallaxbg",
  //   //   {
  //   //     clipPath: "inset(0 0 100% 0)",
  //   //     opacity: 1,
  //   //   },
  //   //   {
  //   //     clipPath: "inset(0 0 0% 0)",
  //   //     opacity: 1,
  //   //     duration: 1,
  //   //     scrollTrigger: {
  //   //       trigger: ".parallaxbg",
  //   //       start: "top bottom",
  //   //       end: "50% 50%",
  //   //       scrub: 1,
  //   //       // markers: true,
  //   //     },
  //   //   }
  //   // );
  // });

  return (
    <main className="bg-zinc-800">
      <div className=" w-11/12 3xl:w-9/12 mx-auto md:py-20 py-4 " ref={aboutContainer}>
        <section className="grid md:grid-cols-2 gap-4 justify-center items-start ">
          <div className=" md:sticky top-[5em]">
            <div className="h-[24px] overflow-hidden mb-2">
            </div>
            <h1 className="header lg:text-4xl text-white md:text-3xl text-3xl font-bold leading-[1.1em]">
              Outsourcing and outstaffing solutions for sustainable
              <span className="text-tertiary"> Business Growth.</span>
            </h1>
          </div>

          <div className="about-img-animate ">

            <p className=" font-medium md:text-lg text-sm text-gray-100 my-6">
              In todays rapidly evolving business landscape, companies are
              increasingly turning to outsourcing and outstaffing as strategic
              solutions to drive growth, optimize operations, and maintain a
              competitive edge. Both approaches offer distinct advantages that
              can contribute to sustainable business growth, yet they cater to
              different needs and objectives.
            </p>
            
            <button className="md:mt-4 font-semibold flex items-center animate-bounce">
              <Link href="/About">
                <p className="text-tertiary ">Read More</p>
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M8 7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V9.414l-8.293 8.293a1 1 0 0 1-1.414-1.414L14.586 8H9a1 1 0 0 1-1-1"
                />
              </svg>
            </button>
            <div className="text-white grid grid-cols-2 items-center justify-center gap-10 py-10  border-2 mt-4 border-gray-200 rounded-xl">
              {details.map((item:any, index) => (
                <div key={index} className="grid place-items-center">
                  <h2
                    className="font-extrabold lg:text-6xl md:text-4xl text-3xl"
                    ref={ref}
                  >
                  {inView &&  <CountUp start={0} end={item.num} duration={2}/> }
                   
                  </h2>


                  <h3 className="font-extrabold lg:text-base text-[10px] uppercase pt-2 text-tertiary">
                    {item.text}
                  </h3>

                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* parallax background */}
      <div className="parallaxbg bg-parallax2 bg-fixed h-[40vh] bg-cover">
       
      </div>
    </main>
  );
};

export default AboutUs;

const details = [
  {
    num: "2010",
    text: "Incorporation year",
  },
  {
    num: "6",
    text: "Global Location",
  },
  {
    num: "5000",
    text: "Clients Served",
  },
  {
    num: "45000",
    text: "Total Deployed",
  },
];
