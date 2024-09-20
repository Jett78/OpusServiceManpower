"use client";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { supabase } from "@/lib/supabase";

gsap.registerPlugin(ScrollTrigger);
const TrustComponent = () => {
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
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".trustcomponent",
        start: "top bottom",
        end: "50% 50%",
        scrub: 1,
        // markers: true,
      },
    });
    // tl.from(".trustcomponent", {
    //   // opacity:0,
    //   scale: 0.5,
    //   duration: 1,
    // });
  });
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
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
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          pauseOnHover: false,
        },
      },
    ],
  };
  const settings2 = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
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
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          pauseOnHover: false,
        },
      },
    ],
  };
  return (
    <main className="trustcomponent md:my-28 my-10 bg-gray-50 py-16">
      <h2 className="font-bold sm:text-2xl text-xl w-fit mx-auto uppercase text-center">
        <span className="text-gradient font-extrabold ">Trusted </span>by 1000+
        Companies
      </h2>

      <div className="bg-gray-50 mt-10">
        <Slider {...settings}>
          {testimonial.map((item: any, index: number) => (
            <div key={index}>
              <Image
                src={item?.url}
                alt="icons-company"
                width={100}
                height={100}
                className=" object-cover rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="bg-gray-50 pt-6">
        <Slider {...settings2}>
          {testimonial.map((item: any, index: number) => (
            <div key={index}>
              <Image
                src={item?.url}
                alt="icons-company"
                width={100}
                height={100}
                className=" object-cover rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </main>
  );
};

export default TrustComponent;

const companies = [
  {
    img: "/companies/client_1.png",
  },
  {
    img: "/companies/client_2.png",
  },
  {
    img: "/companies/client_3.png",
  },
  {
    img: "/companies/client_4.png",
  },
  {
    img: "/companies/client_5.png",
  },
  {
    img: "/companies/client_6.png",
  },
  {
    img: "/companies/client_7.png",
  },
  {
    img: "/companies/client_8.png",
  },
  {
    img: "/companies/client_9.png",
  },
  {
    img: "/companies/client_10.png",
  },
];
