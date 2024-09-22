"use client";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { supabase } from "@/lib/supabase";

const Slides = () => {
  const [testimonial, setTestimonial] = useState<any>([]);
  React.useEffect(() => {
    const fetch = async () => {
      let { data, error } = await supabase.from("CompanyImg").select("*");
      if (error) {
        throw new Error("Failed to fetch blogs");
      } else {
        setTestimonial(data || []);
      }
    };
    fetch();
  }, []);
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
    rtl: true, // Add this line to change the slide direction
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
    <main className="md:my-28 my-6 max-w-screen bg-zinc-800 py-14">
      <div className=" relative">
        {/* <div className="absolute left-0 top-0 w-[15rem] z-30 bg-gradient-to-r from-white via-white  to-transparent h-full"></div> */}
        {/* <div className="absolute right-0 top-0 w-[15rem] z-30 bg-gradient-to-l from-white via-white  to-transparent h-full"></div> */}
        <h2 className="font-bold sm:text-2xl text-xl w-fit mx-auto text-white uppercase text-center pb-10">
          <span className="text-tertiary font-extrabold ">Trusted </span>by 100+
          Companies
        </h2>
        <Slider {...settings}>
          {companies.map((item: any, index: number) => (
            <div key={index} className="">
              <Image
                src={item.img}
                alt="icons-company"
                width={100}
                height={100}
                className=" object-cover rounded-lg h-20"
              />
            </div>
          ))}
        </Slider>
      </div>
    </main>
  );
};

export default Slides;

const companies = [
  {
    img: "/companies/client10.png",
  },
  {
    img: "/companies/client11.png",
  },
  {
    img: "/companies/client12.png",
  },
  {
    img: "/companies/client10.png",
  },
  {
    img: "/companies/client11.png",
  },
  {
    img: "/companies/client12.png",
  },
];
