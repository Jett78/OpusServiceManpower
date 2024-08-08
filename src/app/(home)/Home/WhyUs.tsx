"use client";
import React, { useRef } from "react";
import { GrVisa } from "react-icons/gr";
import { IoCall } from "react-icons/io5";
import { FaReadme } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);
const whyusdata = [
  {
    title: "Recruitment",
    desc: "Our recruitment services source and attract top talent, ensuring the right candidates fit your job requirements and company culture.",
    img: <IoPeopleSharp />,
  },
  {
    title: "Training",
    desc: "We provide tailored training programs covering technical skills and soft skills to enhance your workforce's competencies and productivity",
    img: <FaReadme />,
  },
  {
    title: "24/7 Support",
    desc: "Our 24/7 support services offer round-the-clock assistance, addressing technical issues and customer inquiries promptly and effectively",
    img: <IoCall />,
  },
  {
    title: "Visa Assistance",
    desc: "We offer expert visa assistance, handling all paperwork and procedures to ensure a smooth and stress-free immigration process.",
    img: <GrVisa />,
  },
];

const WhyUs = () => {
  const whycontainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: whycontainerRef.current,
        start: "top bottom",
        end: "50% 50%",
        scrub: 1,
        // markers: true,
      },
    });

    tl.from(
      ".headanimate",
      {
        y: 24,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
      },
      "<"
    );
    tl.from(
      ".box-animate",
      {
        rotateY: "120deg",
        // opacity:0,
        stagger: 0.5,
        duration: 2,
      },
      "<"
    );
    tl.from(
      ".box-animate2",
      {
        rotateY: "360deg",
        // opacity:0,
        stagger: 0.5,
        duration: 2,
      },
      "<"
    );
  });
  return (
    <main className=" my-20 overflow-hidden w-full" ref={whycontainerRef}>
      <div className="flex flex-wrap justify-center lg:gap-0  w-11/12 mx-auto ">
        <section className="lg:max-w-[50%]">
          <div className="">
            <div className="h-[24px] overflow-hidden mb-6">
              <h2 className="headanimate text-gradient uppercase font-bold text-xl border-b w-fit ">
                Why Us
              </h2>
            </div>
            <h1 className="headanimate lg:text-5xl md:text-3xl text-3xl  font-bold leading-[1.1em]">
              Right Connection and Right Employee
            </h1>
            <p className="headanimate font-medium text-lighttext my-6 max-w-[30em] md:text-xl text-sm min-w-[20em]">
              In the pursuit of business success, two critical factors often
              determine the trajectory of an organization: establishing the
              right connections and hiring the right employees. Both elements
              are essential for driving growth, fostering innovation, and
              achieving long-term success. Here’s how focusing on these aspects
              can significantly impact your business:
            </p>
            <Link href="/Services" className="md:block hidden">
              <button className=" animate-button">
                Know More
              </button>
            </Link>
          </div>
        </section>

        <section className="sm:max-w-[50%] lg:grid-cols-2  grid-cols-1 grid gap-x-4">
          <div className="space-y-6">
            {whyusdata.slice(0, 2).map((item, index) => (
              <div
                key={index}
                className="box-animate border border-[#00AFF0] rounded-lg max-w-200 p-4 cursor-pointer group relative"
              >
                <div className="h-14 w-14 rounded-full border mb-6 gradient text-white text-2xl flex items-center justify-center relative z-50">
                  <div>{item.img}</div>
                </div>
                <h2 className="font-bold text-2xl md:group-hover:text-white text-white md:text-black z-50 relative">
                  {item.title}
                </h2>
                <p className="font-medium md:text-lighttext md:group-hover:text-white  text-white text-sm my-2 z-50 relative">
                  {item.desc}
                </p>
                {/* Background gradient for small screens */}
                <div className="md:hidden z-0 absolute bg-gradient-to-tr from-primary via-secondary to-tertiary w-full h-full right-0 rounded-lg bottom-0" />
                {/* Background gradient on hover for large screens */}
                <div className="hidden sm:block z-0 absolute bg-gradient-to-tr from-primary via-secondary to-tertiary w-full right-0 group-hover:h-full rounded-lg bottom-0 duration-500 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-left" />
              </div>
            ))}
          </div>

          <div className="space-y-6 mt-6">
            {whyusdata.slice(2, 4).map((item, index) => (
              <div
                key={index}
                className="box-animate border border-[#00AFF0] rounded-lg max-w-200 p-4 cursor-pointer group relative"
              >
                <div className="h-14 w-14 rounded-full border mb-6 gradient text-white text-2xl flex items-center justify-center relative z-50">
                  <div>{item.img}</div>
                </div>
                <h2 className="font-bold text-2xl md:group-hover:text-white text-white md:text-black z-50 relative">
                  {item.title}
                </h2>
                <p className="font-medium md:text-lighttext md:group-hover:text-white  text-white text-sm my-2 z-50 relative">
                  {item.desc}
                </p>
                {/* Background gradient for small screens */}
                <div className="md:hidden z-0 absolute bg-gradient-to-tr from-primary via-secondary to-tertiary w-full h-full right-0 rounded-lg bottom-0" />
                {/* Background gradient on hover for large screens */}
                <div className="hidden sm:block z-0 absolute bg-gradient-to-tr from-primary via-secondary to-tertiary w-full right-0 group-hover:h-full rounded-lg bottom-0 duration-500 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-left" />
              </div>
            ))}
          </div>

          <Link href="/Services" className="md:hidden block">
              <button className=" animate-button !my-6">
                Know More
              </button>
            </Link>
        </section>
      </div>

      {/* bg-parallax */}
      {/* <div className="bg-parallax bg-fixed h-[30vh] bg-cover my-20"></div> */}
    </main>
  );
};

export default WhyUs;
