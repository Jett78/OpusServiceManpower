"use client"
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slides = () => {
  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    rtl: true,// Add this line to change the slide direction
    pauseOnHover: false, // Continue sliding when hovered
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          pauseOnHover: false, // Continue sliding when hovered

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          pauseOnHover: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          pauseOnHover: false,
        }
      }
    ]

  };

  return (
    <main className="md:my-28 my-6 max-w-screen bg-gray-50 py-12">
      <div className=" mt-10 relative">
        {/* <div className="absolute left-0 top-0 w-[15rem] z-30 bg-gradient-to-r from-white via-white  to-transparent h-full"></div> */}
        {/* <div className="absolute right-0 top-0 w-[15rem] z-30 bg-gradient-to-l from-white via-white  to-transparent h-full"></div> */}

      <Slider {...settings}>
        {companies.map((item,index) => (
            <div key={index} className="">
                <Image src={item.img} alt="icons-company" width={100} height={100} className=' object-cover rounded-lg' />
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