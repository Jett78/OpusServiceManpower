"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);
const Countries = () => {
  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger:".countriescontainer",
        start: "top bottom",
        end: "50% 50%",
        scrub: 1,
        // markers: true,
      },
    });

    tl.from(".coutriescontainer",{
      opacity:0,
      duration:1,
    })
  })

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false, // Continue sliding when hovered

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          pauseOnHover: false, // Continue sliding when hovered
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          pauseOnHover: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          pauseOnHover: false,
        },
      },
    ],

    
  };
  return (
    <main className="countriescontainer md:my-28 my-10 bg-gray-50 py-16">
      <h2 className="font-bold sm:text-2xl text-xl w-fit mx-auto uppercase text-center">
        Our Operating <span className="text-gradient font-extrabold ">Countries</span>
      </h2>

      <div className="bg-gray-50 mt-10">
        <Slider {...settings}>
          {countryflags.map((item, index) => (
            <div key={index}>
              <Image
                src={item.img}
                alt="icons-company"
                width={100}
                height={100}
                className=" rounded-lg w-[6em] h-[4em] object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </main>
  );
};

export default Countries;

const countryflags = [
  {
    img: "/flags/flag1.png",
  },
  {
    img: "/flags/flag2.png",
  },
  {
    img: "/flags/flag3.png",
  },
  {
    img: "/flags/flag4.png",
  },
  {
    img: "/flags/flag5.png",
  },
  {
    img: "/flags/flag6.png",
  },
  {
    img: "/flags/flag15.png",
  },
  {
    img: "/flags/flag8.png",
  },
  {
    img: "/flags/flag10.png",
  },
  {
    img: "/flags/flag11.png",
  },
  {
    img: "/flags/flag12.png",
  },
];
