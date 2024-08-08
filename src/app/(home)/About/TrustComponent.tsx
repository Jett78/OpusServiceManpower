"use client"
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrustComponent = () => {
  const settings = {
    dots: false,
    arrows:false,
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
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          pauseOnHover: false,
        }
      }
    ]
  };
  const settings2 = {
    dots: false,
    arrows:false,
    infinite: true,
    slidesToShow: 5,
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
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          pauseOnHover: false,
        }
      }
    ]


  };
  return (
    <main className="md:my-28 my-10 bg-gray-50 py-16">
      <h2 className="font-bold sm:text-2xl text-xl w-fit mx-auto uppercase text-center">
        <span className="text-gradient font-extrabold ">Trusted </span>by 1000+
        Companies
      </h2>

      <div className="bg-gray-50 mt-10">
      <Slider {...settings}>
        {companies.map((item,index) => (
            <div key={index}>
                <Image src={item.img} alt="icons-company" width={100} height={100} className=' object-cover rounded-lg' />
            </div>
        ))}
        </Slider>
      </div>

      <div className="bg-gray-50 pt-6">
      <Slider {...settings2}>
        {companies.map((item,index) => (
            <div key={index}>
                <Image src={item.img} alt="icons-company" width={100} height={100} className=' object-cover rounded-lg' />
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