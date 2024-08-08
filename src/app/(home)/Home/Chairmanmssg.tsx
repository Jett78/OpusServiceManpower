"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);
const Chairmanmssg: React.FC = () => {
  const messageConatiner = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const mssgSplit = new SplitType(".mssgdescanimate");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: messageConatiner.current,
        start: "top bottom",
        end: "50% 50%",
        scrub: 1,
        // markers: true,
      },
    });

    gsap.to(".whitebox rect", {
      opacity: 0,
      duration: 0.1,
      stagger: { amount: 1, from: "random" },
      scrollTrigger: {
        trigger: ".whitebox rect",
        start: "top bottom",
        end: "50% 50%",
        scrub: 1,
        // markers: true,
      },
    });

    tl.from(
      ".mssganimate",
      {
        x: 100,
        opacity: 0,
        stagger: 1,
        duration: 2,
      },
      "<"
    );

    tl.from(
      mssgSplit.chars,
      {
        duration: 2,
        opacity: 0,
        stagger: 0.2,
      },
      "<"
    );
  });

  return (
    <main className="w-11/12 mx-auto md:my-40 my-10 overflow-hidden" ref={messageConatiner}>
      <div className="mx-auto rounded-lg ">
        <div className="flex flex-wrap flex-row-reverse items-center justify-center gap-10 ">
          <section className="relative  lg:w-[40%]   h-[35em]  py-10">
            <div className=" pb-10">
              <h2 className="mssganimate text-gradient text-2xl font-bold">
                Chairmans Message
              </h2>
              <h3 className="mssganimate md:text-4xl text-2xl font-bold">
                Honest Services for Sustained Results
              </h3>
            </div>
            <p className="mssgdescanimate font-medium text-sm">
              It is with great pride and gratitude that I welcome you to our
              company, a leading provider of comprehensive manpower solutions.
              At the heart of our operations lies a commitment to excellence,
              innovation, and integrity. We understand the vital role that human
              capital plays in the success of any organization, and we are
              dedicated to delivering the highest quality of service to meet
              your workforce needs.In todays dynamic and fast-paced business
              environment, finding the right talent and maintaining a skilled
              workforce is more critical than ever. Our mission is to empower
              your business by providing customized recruitment, training, and
              support services that align with your strategic goals. We strive
              to build lasting relationships based on trust, reliability, and
              mutual respect.
            </p>
            <h3 className="text-xl font-bold mt-6">Alaxander Doe</h3>
            <p className="text-[12px] font-semibold">Chairman</p>

            <div className="flex gap-4 mt-4">
              <Image
                src="/icons/facebookicon.png"
                width={30}
                height={30}
                alt="icon"
              />
              <Image
                src="/icons/instaicon.png"
                width={30}
                height={30}
                alt="icon"
              />
              <Image
                src="/icons/whatsappicon.png"
                width={30}
                height={30}
                alt="icon"
              />
            </div>

            {/* <div className="absolute text-6xl top-36 opacity-5">
              <ImQuotesLeft />
            </div>
            <div className="absolute text-6xl bottom-28 right-10 opacity-5">
              <ImQuotesRight />
            </div> */}
          </section>

          <section className="lg:w-[40%] relative  sm:top-0 top-32">
            <Image
              src="/chairman.jpg"
              height={1000}
              width={1000}
              alt="chairman"
              className="rounded-lg sm:w-[59em] sm:max-h-[34em] max-h-[25em] object-cover brightness-75"
            />
            <svg
              className="whitebox h-[42em]"
              width="100%"
              height="100%"
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_160_1231)">
                <rect width="70" height="70" fill="#ffffff" />
                <rect y="126" width="70" height="70" fill="#ffffff" />
                <rect y="252" width="70" height="70" fill="#ffffff" />
                <rect y="378" width="70" height="70" fill="#ffffff" />
                <rect y="70" width="70" height="70" fill="#ffffff" />
                <rect y="189" width="70" height="70" fill="#ffffff" />
                <rect y="315" width="70" height="70" fill="#ffffff" />
                <rect y="441" width="70" height="70" fill="#ffffff" />
                <rect x="252" width="70" height="70" fill="#ffffff" />
                <rect x="252" y="126" width="70" height="70" fill="#ffffff" />
                <rect x="252" y="252" width="70" height="70" fill="#ffffff" />
                <rect x="252" y="378" width="70" height="70" fill="#ffffff" />
                <rect x="252" y="70" width="70" height="70" fill="#ffffff" />
                <rect x="252" y="189" width="70" height="70" fill="#ffffff" />
                <rect x="252" y="315" width="70" height="70" fill="#ffffff" />
                <rect x="252" y="441" width="70" height="70" fill="#ffffff" />
                <rect x="126" width="70" height="70" fill="#ffffff" />
                <rect x="126" y="126" width="70" height="70" fill="#ffffff" />
                <rect x="126" y="252" width="70" height="70" fill="#ffffff" />
                <rect x="126" y="378" width="70" height="70" fill="#ffffff" />
                <rect x="126" y="70" width="70" height="70" fill="#ffffff" />
                <rect x="126" y="189" width="70" height="70" fill="#ffffff" />
                <rect x="126" y="315" width="70" height="70" fill="#ffffff" />
                <rect x="126" y="441" width="70" height="70" fill="#ffffff" />
                <rect x="378" width="70" height="70" fill="#ffffff" />
                <rect x="378" y="126" width="70" height="70" fill="#ffffff" />
                <rect x="378" y="252" width="70" height="70" fill="#ffffff" />
                <rect x="378" y="378" width="70" height="70" fill="#ffffff" />
                <rect x="378" y="70" width="70" height="70" fill="#ffffff" />
                <rect x="378" y="189" width="70" height="70" fill="#ffffff" />
                <rect x="378" y="315" width="70" height="70" fill="#ffffff" />
                <rect x="378" y="441" width="70" height="70" fill="#ffffff" />
                <rect x="70" width="70" height="70" fill="#ffffff" />
                <rect x="70" y="126" width="70" height="70" fill="#ffffff" />
                <rect x="70" y="252" width="70" height="70" fill="#ffffff" />
                <rect x="70" y="378" width="70" height="70" fill="#ffffff" />
                <rect x="70" y="70" width="70" height="70" fill="#ffffff" />
                <rect x="70" y="189" width="70" height="70" fill="#ffffff" />
                <rect x="70" y="315" width="70" height="70" fill="#ffffff" />
                <rect x="70" y="441" width="70" height="70" fill="#ffffff" />
                <rect x="315" width="70" height="70" fill="#ffffff" />
                <rect x="315" y="126" width="70" height="70" fill="#ffffff" />
                <rect x="315" y="252" width="70" height="70" fill="#ffffff" />
                <rect x="315" y="378" width="70" height="70" fill="#ffffff" />
                <rect x="315" y="70" width="70" height="70" fill="#ffffff" />
                <rect x="315" y="189" width="70" height="70" fill="#ffffff" />
                <rect x="315" y="315" width="70" height="70" fill="#ffffff" />
                <rect x="315" y="441" width="70" height="70" fill="#ffffff" />
                <rect x="315" width="70" height="70" fill="#ffffff" />
                <rect x="315" y="126" width="70" height="70" fill="#ffffff" />
                <rect x="315" y="252" width="70" height="70" fill="#ffffff" />
                <rect x="315" y="378" width="70" height="70" fill="#ffffff" />
                <rect x="315" y="70" width="70" height="70" fill="#ffffff" />
                <rect x="315" y="189" width="70" height="70" fill="#ffffff" />
                <rect x="315" y="315" width="70" height="70" fill="#ffffff" />
                <rect x="315" y="441" width="70" height="70" fill="#ffffff" />
                <rect x="315" width="70" height="70" fill="#ffffff" />
                <rect x="315" y="126" width="70" height="70" fill="#ffffff" />
                <rect x="315" y="252" width="70" height="70" fill="#ffffff" />
                <rect x="315" y="378" width="70" height="70" fill="#ffffff" />
                <rect x="315" y="70" width="70" height="70" fill="#ffffff" />
                <rect x="315" y="189" width="70" height="70" fill="#ffffff" />
                <rect x="315" y="315" width="70" height="70" fill="#ffffff" />
                <rect x="315" y="441" width="70" height="70" fill="#ffffff" />
                <rect x="189" width="70" height="70" fill="#ffffff" />
                <rect x="189" y="126" width="70" height="70" fill="#ffffff" />
                <rect x="189" y="252" width="70" height="70" fill="#ffffff" />
                <rect x="189" y="378" width="70" height="70" fill="#ffffff" />
                <rect x="189" y="70" width="70" height="70" fill="#ffffff" />
                <rect x="189" y="189" width="70" height="70" fill="#ffffff" />
                <rect x="189" y="315" width="70" height="70" fill="#ffffff" />
                <rect x="189" y="441" width="70" height="70" fill="#ffffff" />
                <rect x="441" width="70" height="70" fill="#ffffff" />
                <rect x="441" y="126" width="70" height="70" fill="#ffffff" />
                <rect x="441" y="252" width="70" height="70" fill="#ffffff" />
                <rect x="441" y="378" width="70" height="70" fill="#ffffff" />
                <rect x="441" y="70" width="70" height="70" fill="#ffffff" />
                <rect x="441" y="189" width="70" height="70" fill="#ffffff" />
                <rect x="441" y="315" width="70" height="70" fill="#ffffff" />
                <rect x="441" y="441" width="70" height="70" fill="#ffffff" />
                <rect x="441" width="70" height="70" fill="#ffffff" />
                <rect x="441" y="126" width="70" height="70" fill="#ffffff" />
                <rect x="441" y="252" width="70" height="70" fill="#ffffff" />
                <rect x="441" y="378" width="70" height="70" fill="#ffffff" />
                <rect x="441" y="70" width="70" height="70" fill="#ffffff" />
                <rect x="441" y="189" width="70" height="70" fill="#ffffff" />
                <rect x="441" y="315" width="70" height="70" fill="#ffffff" />
                <rect x="441" y="441" width="70" height="70" fill="#ffffff" />
                <rect x="441" width="70" height="70" fill="#ffffff" />
                <rect x="441" y="126" width="70" height="70" fill="#ffffff" />
                <rect x="441" y="252" width="70" height="70" fill="#ffffff" />
                <rect x="441" y="378" width="70" height="70" fill="#ffffff" />
                <rect x="441" y="70" width="70" height="70" fill="#ffffff" />
                <rect x="441" y="189" width="70" height="70" fill="#ffffff" />
                <rect x="441" y="315" width="70" height="70" fill="#ffffff" />
                <rect x="441" y="441" width="70" height="70" fill="#ffffff" />
              </g>
              <defs>
                <clipPath id="clip0_160_1231">
                  <rect width="500" height="500" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Chairmanmssg;
