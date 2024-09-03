"use client";
import React, { useRef, useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

gsap.registerPlugin(ScrollTrigger);

const Certificates = () => {
  const [testimonial, setTestimonial] = useState<any>([]);
  React.useEffect(() => {
    const fetch = async () => {
      let { data, error } = await supabase.from("Certificate").select("*");
      if (error) {
        throw new Error("Failed to fetch blogs");
      } else {
        setTestimonial(data || []);
      }
    };
    fetch();
  }, []);
  const certificateref = useRef<any>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".certificatecontainer",
        start: "top bottom",
        end: "50% 50%",
        scrub: 1,
        // markers: true,
      },
    });

    tl.from(certificateref.current?.children, {
      stagger: 0.5,
      rotateX: "120deg",
      duration: 1.5,
      opacity: 0,
    });
  });

  return (
    <main className="certificatecontainer w-11/12 mx-auto md:my-3 my-10">
      <h2 className="font-extrabold text-2xl uppercase w-fit mx-auto text-gradient">
        Certificates
      </h2>
      <p className="font-medium text-md max-w-[60em] md:mx-auto mx-2 sm:text-l text-sm py-2 text-center">
        Each certificate represents our team's proficiency in their respective
        fields, ensuring that we deliver top-notch solutions and services to our
        clients.
      </p>
      <div
        className="flex flex-wrap justify-center gap-8 my-20 "
        ref={certificateref}
      >
        <div className="relative">
        <Image
          
            src="/frame.jpg"
            height={1000}
            width={1000}
            alt="certificate"
            className="h-[35em] sm:max-w-[30em] w-[21em]"
          />
           {testimonial?.map((item: any, index: number) => (
          <Image
            key={index}
            src={item?.url}
            height={1000}
            width={1000}
            alt="certificate"
            className="h-[22em] sm:max-w-[17em] w-[12em] drop-shadow-lg absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
          />
        ))}
        </div>
       
      </div>
      <button className=" gap-2 w-[260px] mx-auto bg-black text-sm font-semibold h-[60px] my-16 flex items-center justify-center rounded-full cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#CC1587] before:via-[#26538C] before:to-[#00AFF0] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
        <AiOutlineDownload size={32} />
       Download Company Profile
      </button>
    </main>
  );
};

export default Certificates;
