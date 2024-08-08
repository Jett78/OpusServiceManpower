"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import demoImg from "../../../../public/Heroimg.png"

gsap.registerPlugin(ScrollTrigger);
const HeroSection: React.FC = () => {
  const heroimg = useRef<HTMLImageElement>(null);
  const maincontainer = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    //img-reveal animation
    // gsap.fromTo(
    //   maincontainer.current,
    //   {
    //     clipPath: "inset(0 0 100% 0)",
    //     opacity: 1,
    //   },
    //   {
    //     clipPath: "inset(0 0 0% 0)",
    //     opacity: 1,
    //     duration: 2,
    //   }
    // );

    // gsap.to(heroimg.current, {
    //   scale: 1.5,
    //   scrollTrigger: {
    //     trigger: heroimg.current,
    //     start: "top top",
    //     end: "bottom top",
    //     scrub: 1,
    //     // markers: true,
    //     pin: true,
    //   },
    // });

    // gsap.to(heroimg.current, {
    //     scale: 1.1,
    //     duration: 2,
    //     ease: "power2.inOut",
    //     yoyo: true,
    //     repeat: -1, // -1 makes the animation repeat indefinitely
    // });
  }, []);

  return (
    <main
      className="relative w-full h-[92vh]  z-0 overflow-hidden"
      ref={maincontainer}
    >
      <Image
        // ref={heroimg}
        height={1000}
        width={1000}
        // src="/HeroImg.png"
        src={demoImg}
        alt="Heroimage"
        className="h-screen object-cover w-full absolute inset-0 brightness-50 overflow-hidden "
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
            <button className="button-gradient ">
              Join with Us
            </button>
          </Link>

          {/* <button className="relative inline-block p-[1px] border rounded-full font-semibold text-white bg-transparent">
            <div className="absolute inset-0 bg-gradient-to-r from-[#CC1587] via-[#26538C] to-[#00AFF0] rounded-full "></div>
            <div className="relative rounded-full bg-white text-black px-6 py-2 flex items-center gap-2">
                <img src="./whatsappicon.png" alt="" className="w-6"/>
                  <span>Whatsapp</span>
            </div>
          </button> */}

         <Link  href="https://wa.me/1234567890">
         <button className="px-6 py-3 border rounded-full text-green-600 bg-white font-bold flex items-center gap-2 border-green-600">
            <Image src="/whatsappicon.png" alt="whatsapp-icon" width={10000} height={1000} className="w-6" />
            <span>Whatsapp Now</span>
          </button>
         </Link>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
