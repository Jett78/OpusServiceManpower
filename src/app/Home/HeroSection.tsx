"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import demoImg from "../../../public/Heroimg.png";
import demoImg2 from "../../../public/heroimg2.jpg";
import demoImg3 from "../../../public/heroimg3.jpg";

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

gsap.registerPlugin(ScrollTrigger);
const HeroSection: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(images[0].img); //state for background image
  const [fade, setFade] = useState(true); // state to trigger fade effect

  const maincontainer = useRef<HTMLDivElement>(null);

  //changing images of background on repeat
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => {
        const currentIndex = images.findIndex(
          (image) => image.img === prevImage
        );
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex].img;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main
      className="relative w-full h-[92vh]  z-0 overflow-hidden"
      ref={maincontainer}
    >
     
        <Image
        src={currentImage}
        alt="Bg-image"
          layout="fill"
          objectFit="cover"
          className=" h-screen w-full absolute inset-0 brightness-50 overflow-hidden"
        />

      <div className="absolute sm:top-1/2 top-[20em] -translate-y-1/2 left-1/2 -translate-x-1/2 text-white  w-11/12 mx-auto">
        <h2 className="font-bold lg:text-[70px] md:text-[48px] sm:text-4xl text-4xl text-center  sm:leading-[65px] whitespace-normal sm:whitespace-nowrap">
          Elevate Your Workforce With Us
        </h2>
        <p className="font-medium text-[18px] text-white sm:py-4 py-8 text-center max-w-[48em] min-w-[15em]  leading-6 mx-auto">
          We provide you with the best human resources to meet your specific
          business needs. Partner with us to effortlessly double your workforce
          and achieve unprecedented growth and efficiency
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-6 group">
          <Link href="/Contact">
            <button className="button-gradient ">Join with Us</button>
          </Link>

          <Link href="https://wa.me/1234567890">
            <button className="px-6 py-3 border rounded-full text-green-600 bg-white font-bold flex items-center gap-2 border-green-600">
              <Image
                src="/whatsappicon.png"
                alt="whatsapp-icon"
                width={10000}
                height={1000}
                className="w-6"
              />
              <span>Whatsapp Now</span>
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
