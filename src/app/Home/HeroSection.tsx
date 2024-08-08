"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import demoImg from "../../../public/Heroimg.png";
import demoImg2 from "../../../public/heroimg2.jpg";
import demoImg3 from "../../../public/heroimg3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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

  return (
    <main className="relative w-full h-[92vh] z-0 overflow-hidden">
      <div className="slider-container overflow-hidden">
        <Slider {...settings}>
          {images.map((item, index) => (
            <div key={index}>
              <div className="relative h-screen w-full brightness-25">
                <Image
                  src={item.img}
                  alt={`Slide ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="absolute lg:left-[2em] sm:top-1/2 sm:-translate-y-1/2 top-16  xl:w-7/12  z-50">
        <div className="text-white md:mt-14 mt-6 px-6">
          <h2 className="font-bold lg:text-[78px] whitespace-nowrap md:text-[48px]  sm:text-4xl text-4xl sm:leading-[68px]">
            Elevate Your Workforce With Us
          </h2>
          <p className="font-medium text-[18px] text-gray-300 lg:py-8 md:py-6
           py-4 md:max-w-[48em] min-w-[18em] leading-6 mx-auto">
            We provide you with the best human resources to meet your specific
            business needs. Partner with us to effortlessly double your
            workforce and achieve unprecedented growth and efficiency.
          </p>
          <div className="flex flex-wrap gap-4 justify-left mt-6 group">
            <Link href="/Contact">
              <button className="button-gradient">Join with Us</button>
            </Link>

            <Link href="https://wa.me/1234567890">
              <button className="px-6 py-3 border rounded-full text-green-600 bg-white font-bold flex items-center gap-2 border-green-600">
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
