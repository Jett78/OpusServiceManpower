
"use client";
import React from "react";
import Slider,{Settings} from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiStarSFill } from "react-icons/ri";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import Image from "next/image";

const Testimoinals:React.FC = () => {
  const settings:Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay:true,
    autoplaySpeed: 2000,
    
  };
  return (
    <main className=" md:my-20 my-6 ">
      <div className="rounded-lg sm:py-20 py-4 bg-[url('/globe.jpeg')] bg-center bg-white bg-blend-lighten bg-opacity-50">
        <h2 className="text-center font-extrabold sm:text-l text-sm uppercase tracking-wider">
          Testimonials
        </h2>
        <h2 className="font-bold md:text-3xl text-2xl text-center text-gradient w-fit mx-auto mt-2">
          What Our Clients Are Saying
        </h2>

        <div className=" sm:mx-40 mx-6 text-center mt-10 relative">
          <Slider {...settings}>
            {testimonialsdata.map((item, index) => (
              <div key={index}>
                <div className="flex text-2xl text-orange-400 justify-center">
                  {[...Array(5)].map((_, index) => (
                    <RiStarSFill key={index} />
                  ))}
                </div>
                <h2 className="sm:text-l text-sm font-semibold my-4">{item.desc}</h2>
                <Image src={item.img} alt={item.name} height={1000} width={1000} className="h-14 w-14  rounded-full mx-auto object-cover object-center"/>
                <h2 className="sm:text-xl text-md font-bold py-4">{item.name}</h2>
              </div>
            ))}
          </Slider>

          {/* <div className="absolute sm:text-6xl text-2xl sm:bottom-[3em] bottom-[12em]  opacity-50 text-tertiary">
            <ImQuotesLeft />
          </div>
          <div className="absolute sm:text-6xl text-2xl sm:bottom-16 bottom-28 right-0 opacity-50 text-tertiary">
            <ImQuotesRight />
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default Testimoinals;

const testimonialsdata:Testimonial[] = [
  {
    name: "John Doe",
    desc: "Working with [Company Name] has been a game-changer for our recruitment process. Their team is highly professional and understands our specific needs. They consistently provide us with top-notch candidates who fit perfectly with our company culture.",
    img: "/avatar.jpg",
  },
  {
    name: "Jane Doe",
    desc: "The level of service and support we receive from [Company Name] is exceptional. They are always responsive and go above and beyond to ensure our staffing requirements are met. Their expertise in the industry is evident, and they have become a trusted partner in our growth",
    img: "/avatar.jpg",
  },
  {
    name: "Alexander Muffins",
    desc: "We have been collaborating with [Company Name] for several years now, and they have been instrumental in helping us find the right talent for our organization. Their commitment to quality and their deep understanding of our industry needs have made a significant impact on our operations.",
    img: "/avatar.jpg",
  },
  {
    name: "Kiran Nepali",
    desc: "The team at [Company Name] has been a pleasure to work with. Their recruitment process is efficient, and they always deliver candidates who are well-suited for the roles. Their dedication to customer satisfaction is truly commendable",
    img: "/avatar.jpg",
  },
];
type Testimonial = {
  name:string,
  desc:string,
  img:string,
}
