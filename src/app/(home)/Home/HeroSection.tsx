"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Link from "next/link";
import demoImg from "../../../../public/Heroimg.png";
import demoImg2 from "../../../../public/heroo.png";
import demoImg3 from "../../../../public/heroo.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";

const images = [
  {
    img: demoImg,
  },
  {
    img: demoImg2,
  },
  {
    img: demoImg3,
  },
];

const HeroSection: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const herocontent = useRef<any>();

  useGSAP(() => {
    const headertext = new SplitType(".animateheader");

    const tl = gsap.timeline();

    tl.fromTo(
      herocontent.current,
      {
        clipPath: "inset(0 0 100% 0)",
        opacity: 0,
      },
      {
        clipPath: "inset(0 0 0% 0)",
        opacity: 1,
        duration: 2,
        ease: "power2.inOut",
      },
      "<"
    );

    tl.from(headertext.chars, {
      stagger: 0.05,
      duration: 0.02,
      y: 20,
      opacity: 0,
    });
    tl.from(".desctext", {
      duration: 0.5,
      opacity: 0,
    });
    tl.from(".animatebutton", {
      duration: 1,
      opacity: 0,
    });
  });
  return (
    <main
      className="relative w-full h-screen z-0 overflow-hidden
    "
      ref={herocontent}
    >
      <div className="relative sm:h-screen h-[92vh] w-full ">
        <Image
          src={demoImg3}
          alt="hero-img"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className="absolute lg:left-[4em] top-1/2 -translate-y-1/2   xl:w-7/12  z-50">
        <div className="text-black md:mt-14 mt-6 px-6">
          <h2 className="font-clash animateheader font-semibold text-zinc-800 tracking-wider lg:text-[78px] 2xl:text-[5vw] 2xl:leading-[0.9em] md:text-[48px]  sm:text-4xl text-4xl sm:leading-[68px]">
            Looking for a Job?
          </h2>
          <p
            className="desctext font-medium  text-[16px] text-gray-800 lg:py-8 md:py-6
           py-4 md:max-w-[42em] min-w-[18em] leading-6"
          >
            We have exciting career opportunities waiting for you across the
            Middle East. Whether you're looking to advance your career, explore
            new industries, or find your dream job, we're here to connect you
            with the perfect match
          </p>
          <div className="flex flex-wrap gap-4 justify-left mt-6 group">
            <Link href="/Contact" className="animatebutton">
              <button className=" button-gradient">Find Job Now</button>
            </Link>

            <Link href="https://wa.me/1234567890">
              <button className="animatebutton px-6 py-3 border rounded-full text-green-600 bg-white font-bold flex items-center gap-2 border-green-600">
                <Image
                  src="/whatsappicon.png"
                  alt="whatsapp-icon"
                  width={24}
                  height={24}
                  className="w-6"
                />
                <span>Whatsapp Now</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
