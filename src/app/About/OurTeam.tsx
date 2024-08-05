"use client"
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurTeam = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredIndex2, setHoveredIndex2] = useState<number | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <main className="md:my-28 my-10 w-11/12 mx-auto">
      <h2 className="font-extrabold text-2xl uppercase w-fit mx-auto">
        Meet Our <span className="text-gradient">Team</span>
      </h2>
      <p className="font-medium text-md max-w-[60em] md:mx-auto mx-2 sm:text-l text-sm py-2 text-center">
        Our team is equipped with a diverse range of certifications that
        validate our skills and expertise across various countries
      </p>

      <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center md:w-7/12 w-11/12 mx-auto justify-center gap-10 my-20 group cursor-pointer">
        {teamdata.map((item, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="overflow-hidden rounded-lg">
              <Image
                src={item.img}
                alt="team"
                width={700}
                height={1000}
                className={`h-[50vh] w-full object-cover ease-in-out duration-300 ${
                  hoveredIndex === index ? "grayscale scale-105" : ""
                }`}
              />
            </div>
            <div
              className={`bg-white w-full px-2 absolute bottom-0 border-b py-2 transition-opacity duration-300 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="grid place-items-center whitespace-nowrap py-2 ">
                <h2 className="font-bold text-xl">{item.name}</h2>
                <h3 className="font-semibold  text-sm italic tracking-wide">
                  {item.role}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="md:grid hidden lg:grid-cols-4 grid-cols-2 place-items-center w-10/12 mx-auto justify-center gap-10 my-20 group cursor-pointer">
        {teamdata2.map((item, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => setHoveredIndex2(index)}
            onMouseLeave={() => setHoveredIndex2(null)}
          >
            <div className="overflow-hidden rounded-lg">
              <Image
                src={item.img}
                alt="team"
                width={700}
                height={1000}
                className={`h-[42vh] w-full object-cover ease-in-out duration-300 ${
                  hoveredIndex2 === index ? "grayscale scale-105" : ""
                }`}
              />
            </div>
            <div
              className={`bg-white w-[18em] px-2 absolute bottom-0 border-b py-2 transition-opacity duration-300 ${
                hoveredIndex2 === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="grid place-items-center whitespace-nowrap py-2 ">
                <h2 className="font-bold text-xl">{item.name}</h2>
                <h3 className="font-semibold  text-sm italic tracking-wide">
                  {item.role}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* slider for smaller screens */}
      <div className="cursor-pointer md:hidden block mx-6">
        <Slider {...settings}>
          {teamdata2.map((item, index) => (
            <div
              key={index}
              className="relative group "
              onMouseEnter={() => setHoveredIndex2(index)}
              onMouseLeave={() => setHoveredIndex2(null)}
            >
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={item.img}
                  alt="team"
                  width={700}
                  height={1000}
                  className={`h-[42vh] w-full object-cover ease-in-out duration-300 ${
                    hoveredIndex2 === index ? "grayscale scale-105" : ""
                  }`}
                />
              </div>
              <div
                className={`bg-white w-full px-2 absolute bottom-0 border-b py-2 transition-opacity duration-300 ${
                  hoveredIndex2 === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="grid place-items-center whitespace-nowrap py-2 ">
                  <h2 className="font-bold text-xl">{item.name}</h2>
                  <h3 className="font-semibold  text-sm italic tracking-wide">
                    {item.role}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </main>
  );
};

export default OurTeam;

const teamdata = [
  {
    name: "Jane Donald",
    img: "/team/team1.jpg",
    role: "Chief Executive Officer",
  },
  {
    name: "Alander Doe",
    img: "/team/team1.jpg",
    role: "Chief Marketting Officer",
  },
];
const teamdata2 = [
  {
    name: "Jane Doe",
    img: "/team/team1.jpg",
    role: "Chief Executive Officer",
  },
  {
    name: "Alander Donald",
    img: "/team/team1.jpg",
    role: "Chief Marketting Officer",
  },
  {
    name: "Rajesh Hamal",
    img: "/team/team1.jpg",
    role: "Chief Technical Officer",
  },
  {
    name: "Jane Doe",
    img: "/team/team1.jpg",
    role: "Chief Executive Officer",
  },
];
const teamdata3 = [
  {
    name: "Jane Doe",
    img: "/team/team1.jpg",
    role: "Chief Executive Officer",
  },
  {
    name: "Alander Doe",
    img: "/team/team1.jpg",
    role: "Chief Marketting Officer",
  },
  {
    name: "Rajesh Hamal",
    img: "/team/team1.jpg",
    role: "Chief Technical Officer",
  },
  {
    name: "Jane Doe",
    img: "/team/team1.jpg",
    role: "Chief Executive Officer",
  },
  {
    name: "Jane Doe",
    img: "/team/team1.jpg",
    role: "Chief Executive Officer",
  },
];
