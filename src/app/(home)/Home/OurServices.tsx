"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);
const OurServices: React.FC = () => {
  const mainRef = useRef<any>();
  const containerRef = useRef<any>();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  // useGSAP(() => {
  //   const main = mainRef.current;
  const mediaQuery = window.matchMedia("(min-width: 768px)");

  // if (mediaQuery.matches) {
  //   gsap.to(main, {
  //     scrollTrigger: {
  //       trigger:containerRef.current,
  //       start: "center center",
  //       end: () => `+=${main.scrollWidth - main.clientWidth}`,
  //       pin: true,
  //       scrub: 2,
  //     },
  //     x: () => `-${main.scrollWidth - main.clientWidth}px`,
  //   });
  // }

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        //
        start: "center center",
        end: "top -500%",
        trigger: containerRef.current,
        pin: true,
        scrub: 0.5,
      },
    });

    // tl.from(containerRef.current,{
    //    scale:0.8,
    // })
    if (mainRef.current && containerRef.current) {
      const totalScrollWidth = mainRef.current.scrollWidth;
      const visibleWidth = containerRef.current.offsetWidth;
      if (mediaQuery.matches) {
        tl.to(mainRef.current, {
          x: -(totalScrollWidth - visibleWidth) - 100,
          duration: 5,
        });
      }
    }
  });
  // }, []);

  return (
    <div className="overflow-x-hidden">
      <div ref={containerRef} className="w-full md:block hidden ">
        <main
          ref={mainRef}
          className="md:pl-24 my-10 md:flex items-center sm:gap-20 gap-8  "
        >
          <section className="md:flex hidden flex-col justify-between sm:gap-20 ">
            <div className="md:pl-0 pl-4">
              <div className="flex items-center gap-4 w-[25em]">
                <h2 className="font-bold sm:text-4xl text-center text-2xl text-gradient uppercase ">
                  Our Services
                </h2>
                <p className="border-2 border-primary rounded-full h-10 w-10 md:flex hidden justify-center items-center">
                  <FaArrowRightLong />
                </p>
              </div>
              <p className="text-left  text-lighttext md:text-base text-sm font-medium max-w-[20em] mt-4">
                Explore our comprehensive range of services designed to meet
                your diverse needs, from industrial and IT solutions to
                transportation and construction services.
              </p>
            </div>
            <button className="animate-button ">
              <Link href="/Services">View more</Link>
            </button>
          </section>

          <section className="md:flex hidden gap-4 overflow-x-clip">
            {services.map((item, index) => (
              <div
                key={index}
                className="relative group sm:w-[32em] w-[20em] h-[20em] sm:h-[35em] flex-shrink-0  duration-300 ease-in-out cursor-pointer overflow-hidden"
              >
                <Link href="/Services">
                  <Image
                    src={item.img}
                    alt="scroll-images"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl group-hover:brightness-50 ease-in-out duration-300"
                  />

                  <div className="w-full h-full absolute inset-0 text-white rounded-3xl  bg-gradient-to-b from-transparent via-transparent bg-black bg-blend-overlay bg-opacity-30 to-black">
                    <div className="absolute bottom-12  ease-in-out duration-700  left-8">
                      <h2 className="font-bold sm:text-2xl text-xl">
                        {item.title}
                      </h2>
                      {/* <p className="py-10 pr-8">{item.desc}</p> */}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </section>
        </main>
      </div>

      {/* this slider is for smaller screens only */}
      <section className="md:hidden flex flex-col justify-between sm:gap-20">
        <div className="md:pl-0 pl-4">
          <div className="flex items-center gap-4 w-[25em]">
            <h2 className="font-bold sm:text-4xl text-center text-2xl text-gradient uppercase">
              Our Services
            </h2>
            <p className="border-2 border-tertiary rounded-full h-10 w-10 md:flex hidden justify-center items-center">
              <FaArrowRightLong />
            </p>
          </div>
          <p className="text-left sm:text-md text-lighttext text-sm font-medium max-w-[20em] mt-4">
            Explore our comprehensive range of services designed to meet your
            diverse needs, from industrial and IT solutions to transportation
            and construction services.
          </p>
        </div>
        <button className="animate-button !hidden">View More</button>
      </section>

      <section className="md:hidden block my-6 px-4">
        <Slider {...settings}>
          {services.map((item, index) => (
            <div
              key={index}
              className="relative sm:w-[32em] w-[20em] h-[20em] sm:h-[35em] flex-shrink-0  cursor-pointer overflow-hidden "
            >
              <Image
                src={item.img}
                alt="scroll-images"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl hover:scale-110 ease-in-out duration-300"
              />

              <div className="w-full h-full absolute inset-0 text-white rounded-3xl  bg-gradient-to-b from-transparent via-transparent to-black">
                <div className="absolute bottom-12 left-2">
                  <h2 className="font-semibold sm:text-xl text-lg">
                    {item.title}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <button className="animate-button !my-6 !w-fit !px-4 ">
          <Link href="/Services">View more </Link>
        </button>
      </section>
    </div>
  );
};

export default OurServices;

const services = [
  {
    title: "Oil & Gases",
    desc: "We are dedicated to powering the oil industry withnges and demands that address the complex and evolving needs of the oil and gas industry. With a deep understanding of industry-specific requirements and a network of highly skilled professionals, we strive to be a trusted partner to oil and gas companies worldwide. By leveraging our expertise and insights.",
    img: "/servicesimg/oil.png",
  },
  {
    title: "Construction Service",
    desc: "Our construction staffing services are meticulously ysupervisors to general laborers and specialized tradespeople. Recognizing the critical need for timely and efficient project execution, we focus on delivering staffing solutions that enhance productivity, ensure safety, and uphold quality standards. Whether you are overseeing a large infrastructure project",
    img: "/servicesimg/construction.png",
  },
  {
    title: "Industrial Services",
    desc: "We are dedicated to powering the oil industry with challenges and dema of the oil and gas industry. With a deep understanding of industry-specific requirements and a network of highly skilled professionals, we strive to be a trusted partner to oil and gas companies worldwide. By leveraging our expertise and insights, we aim to support companies in achieving their operational goals",
    img: "/servicesimg/industrial.png",
  },
  {
    title: "Health Services",
    desc: "In the healthcare sector, the demand for skilled staffed with the right talent is crucialhealthcare organizations with a diverse range of medical professionals, including doctors, nurses, technicians, and administrative staff. Our staffing solutions are designed to meet the fluctuating needs of healthcare facilities, whether you require temporary staff to cover short-term needs",
    img: "/servicesimg/health.png",
  },
  {
    title: "Information & Technology",
    desc: "In the rapidly evolving field of information technology, .network administration, cybersecurity, and IT support. We specialize in sourcing and placing highly skilled professionals who are proficient in the latest technologies and methodologies. Whether you need temporary support for a specific project or long-term staff augmentation.",
    img: "/servicesimg/technology.png",
  },
  {
    title: "Accomodation & Transformation",
    desc: "Our transportation services are meticulously .  distribution, fleet management, and logistics coordination. Our commitment is to optimize your supply chain operations, reduce costs, and enhance delivery efficiency through our tailored staffing and operational solutions. With a focus on reliability and innovation and transportation.",
    img: "/servicesimg/transportation.png",
  },
  {
    title: "Blue-Collar & White-Collar Services",
    desc: "Our blue-collar staffing  skilled labor for positions such as manufacturing, construction, maintenance, and logistics. Understanding the critical role that a reliable and proficient workforce plays in operational efficiency and productivity, we offer comprehensive services that include recruitment, training, and on-site support.",
    img: "/servicesimg/services3.jpg",
  },
  {
    title: "Pro Support",
    desc: "Our blue-collar staffing  skilled labor for positions such as manufacturing, construction, maintenance, and logistics. Understanding the critical role that a reliable and proficient workforce plays in operational efficiency and productivity, we offer comprehensive services that include recruitment, training, and on-site support.",
    img: "/servicesimg/prosupport.webp",
  },
];
