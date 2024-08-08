"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Cta from "../Home/Cta";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const ServiceContainer: React.FC = () => {
  const serviceContainer = useRef<any>(null);
  const mainContainer = useRef<any>(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainContainer.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        // markers: true,
      },
    });

    tl.fromTo(
      serviceContainer.current?.children,
      { y: 100, opacity: 0, scale: 0.5 },
      { y: 0, opacity: 1, stagger: 0.3, scale: 1, ease: "power2.out" }
    );

    tl.to(serviceContainer.current?.children, { scale: 0.5 });
  });

  return (
    <main>
      <div className="w-11/12 mx-auto pt-10" ref={mainContainer}>
        <h2 className="font-extrabold text-3xl uppercase text-black w-fit mx-auto">
          Our <span className="text-gradient">Services</span>
        </h2>
        <p className="font-medium text-md max-w-[60em] md:mx-auto mx-2 sm:text-l text-sm py-2 text-center">
          Explore our comprehensive range of services designed to meet your
          diverse needs, from industrial and IT solutions to transportation and
          construction services.
        </p>

        <div className="my-16">
          <div className="grid gap-20" ref={serviceContainer}>
            {servicesdata.map((item: any, index) => (
              <div key={index} className="grid gap-8">
                <div
                  className={` flex flex-wrap lg:justify-center items-start xl:gap-20 md:gap-10 gap-6 ${
                    index % 2 == 1 ? " flex-row-reverse" : ""
                  }`}
                >
                  <div className={`flex gap-2 items-center `}>
                    <h2 className="font-extrabold lg:text-9xl md:text-6xl sm:text-4xl text-4xl font-sans text-gradient">
                      {item.num}
                    </h2>
                    <h2 className="font-bold lg:text-5xl md:text-4xl text-2xl max-w-80 ">
                      {item.title}
                    </h2>
                  </div>

                  <div className="xl:max-w-[40em]">
                    <p className="font-medium lg:text-l text-[14px] text-lighttext">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <figure>
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={700}
                    height={1000}
                    className="max-h-[50vh] w-[70em] mx-auto object-cover rounded-lg shadow-md"
                  />
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Cta />
    </main>
  );
};

export default ServiceContainer;

const servicesdata = [
  {
    num: "01",
    img: "/servicesimg/oil.png",
    title: "Oil & Gases",
    desc: "We are dedicated to powering the oil industry withnges and demands that address the complex and evolving needs of the oil and gas industry. With a deep understanding of industry-specific requirements and a network of highly skilled professionals, we strive to be a trusted partner to oil and gas companies worldwide. By leveraging our expertise and insights, we aim to support companies in achieving their operational goals, driving efficiency, and fostering growth in an increasingly competitive market. Our goal is to deliver unparalleled service that enhances organizational performance and supports the sustainable development of the global energy sector.",
  },
  {
    num: "02  ",

    img: "/servicesimg/industrial.png",
    title: "Industrial",
    desc: "We are dedicated to powering the oil industry with challenges and dema of the oil and gas industry. With a deep understanding of industry-specific requirements and a network of highly skilled professionals, we strive to be a trusted partner to oil and gas companies worldwide. By leveraging our expertise and insights, we aim to support companies in achieving their operational goals, driving efficiency, and fostering growth in an increasingly competitive market. Our goal is to deliver unparalleled service that enhances organizational performance and supports the sustainable development of the global energy sector.",
  },
  {
    num: "03",

    img: "/servicesimg/health.png",
    title: "Health",
    desc: "In the healthcare sector, the demand for skilled staffed with the right talent is crucialhealthcare organizations with a diverse range of medical professionals, including doctors, nurses, technicians, and administrative staff. Our staffing solutions are designed to meet the fluctuating needs of healthcare facilities, whether you require temporary staff to cover short-term needs or permanent placements for long-term roles. By partnering with us, you gain access to a pool of highly qualified and vetted candidates who are dedicated to supporting your facility’s operations and enhancing patient outcomes. We understand the unique challenges of the healthcare industry and are committed to delivering staffing solutions that ensure continuity of care and operational efficiency",
  },
  {
    num: "04",

    img: "/servicesimg/construction.png",
    title: "Construction",
    desc: "Our construction staffing services are meticulously ysupervisors to general laborers and specialized tradespeople. Recognizing the critical need for timely and efficient project execution, we focus on delivering staffing solutions that enhance productivity, ensure safety, and uphold quality standards. Whether you are overseeing a large infrastructure project or a smaller residential build, our tailored solutions are aimed at supporting your project's specific requirements. With our expertise in construction staffing, we help you assemble a competent team capable of navigating the challenges of construction work and achieving project milestones effectively",
  },
  {
    num: "05",

    img: "/servicesimg/technology.png",
    title: "Information Technology",
    desc: "In the rapidly evolving field of information technology, .network administration, cybersecurity, and IT support. We specialize in sourcing and placing highly skilled professionals who are proficient in the latest technologies and methodologies. Whether you need temporary support for a specific project or long-term staff augmentation, we provide tailored solutions that ensure your IT infrastructure remains robust, secure, and scalable. By partnering with us, you gain access to a pool of experts who can drive innovation, enhance operational efficiency, and support your business's technological advancement",
  },
  {
    num: "06",

    img: "/servicesimg/transportation.png",
    title: "Transportation",
    desc: "Our transportation services are meticulously .  distribution, fleet management, and logistics coordination. Our commitment is to optimize your supply chain operations, reduce costs, and enhance delivery efficiency through our tailored staffing and operational solutions. With a focus on reliability and innovation, we help companies navigate the challenges of transportation logistics, ensuring that goods are moved safely and efficiently from origin to destination. By leveraging our expertise and extensive network, we aim to support the seamless functioning of your transportation operations, ultimately contributing to your business's overall success and growth in a competitive marketplace",
  },
  {
    num: "07",

    img: "/servicesimg/collar.png",
    title: "Blue-Collar/White-Collar",
    desc: "Our blue-collar staffing  skilled labor for positions such as manufacturing, construction, maintenance, and logistics. Understanding the critical role that a reliable and proficient workforce plays in operational efficiency and productivity, we offer comprehensive services that include recruitment, training, and on-site support. Our goal is to help businesses build a robust and capable team that can handle the complexities of blue-collar work with expertise and dedication. By ensuring that you have access to the right talent for your specific needs, we aim to enhance your operational effectiveness and contribute to your long-term success..",
  },
];
