// components/Preloader.js
"use client";
import Image from "next/image";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";

const Preloader = (setLoading: any) => {
  useGSAP(() => {
    const logoSplit = new SplitType(".maintext");

    const tl = gsap.timeline();

    tl.fromTo(
      logoSplit.chars,
      {
        display: "hidden",
        opacity: 0,
      },
      {
        display: "inline-block",
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: "power2.inout",
      }
  ,"<"  );
    tl.fromTo(
      "#mylogo",
      {
        x:-800,
        // opacity: 0,
        // rotateZ:"360deg",
        opacity:1,
      },
      {
        duration: 1,
        x:0,
        scale: 1,
        opacity: 1,
        rotateZ:"320deg",

      },"<"
    );
    tl.to(".maintext",{
      delay:0.8,
      x:30,
    },"<")
    tl.to(".maintext",{
      x:16,
    },)

    tl.to("#mylogo", {
      translateX: 0,
    });

    tl.to(".preloader", {
      opacity: 0,
      duration: 0.5,
      ease: "sine.inOut",
      onComplete: function () {
        setLoading(false);
      },
    });
  });

  return (
    <div className="preloader">
      <Image
        id="mylogo"
        src="/opuslogoonly.png"
        height={1000}
        width={1000}
        alt="animated svg"
        className="w-20 h-20 translate-x-14 opacity-0"
      />
      <div className="">
        <h2 className="maintext font-extrabold  text-4xl -ml-5">OPUS</h2>
        {/* <p>MANPOWER</p> */}
      </div>
    </div>
  );
};

export default Preloader;
