"use client";
import React, { useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiStarSFill } from "react-icons/ri";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { supabase } from "@/lib/supabase";

gsap.registerPlugin(ScrollTrigger);

const Testimoinals: React.FC = () => {
  const [testimonial, setTestimonial] = useState<any>([]);
  React.useEffect(() => {
    const fetch = async () => {
      let { data, error } = await supabase.from("Testimonial").select("*");
      if (error) {
        throw new Error("Failed to fetch blogs");
      } else {
        setTestimonial(data || []);
      }
    };
    fetch();
  }, []);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonialsanimate",
        start: "top bottom",
        end: "50% 50%",
        scrub: 1,
        // markers: true,
      },
    });

    tl.from(".testimonialsanimate", {
      scale: 0.5,
      opacity: 0,
      ease: "power2.out",
    });
  });
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <main className=" md:my-20 my-6 ">
      <div className="testimonialsanimate rounded-lg sm:py-20 py-4 bg-[url('/globe.jpeg')] bg-center bg-white bg-blend-lighten bg-opacity-50">
        <h2 className="text-center font-extrabold sm:text-l text-sm uppercase tracking-wider">
          Testimonials
        </h2>
        <h2 className="font-bold md:text-3xl text-2xl text-center text-gradient w-fit mx-auto mt-2">
          What Our Clients Are Saying
        </h2>
        <div className=" sm:mx-40 mx-6 text-center mt-10 relative">
          <Slider {...settings}>
            {testimonial?.map((item:any, index:number) => (
              <div key={index}>
                <div className="flex text-2xl text-orange-400 justify-center">
                  {[...Array(5)].map((_, index) => (
                    <RiStarSFill key={index} />
                  ))}
                </div>
                <h2 className="sm:text-l text-sm font-semibold my-4">
                  {item.Message}
                </h2>
                <Image
                  src={item.Image}
                  alt={item.Name}
                  height={1000}
                  width={1000}
                  className="h-14 w-14  rounded-full mx-auto object-cover object-center"
                />
                <h2 className="sm:text-xl text-md font-bold py-4">
                  {item.Name}
                </h2>
              </div>
            ))}
          </Slider>

          <div className="sm:hidden lg:block block">
            <div className="absolute sm:text-6xl text-2xl lg:bottom-[3em] md:bottom-[5em] bottom-[12em]  opacity-50 text-tertiary">
              <ImQuotesLeft />
            </div>
            <div className="absolute sm:text-6xl text-2xl sm:bottom-16 bottom-28 right-0 opacity-50 text-tertiary">
              <ImQuotesRight />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Testimoinals;