import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCopyright } from "react-icons/fa6";

const navdata = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/About",
  },
  {
    title: "Services",
    path: "/Services",
  },
  {
    title: "Career",
    path: "/Career",
  },
  {
    title: "Blog",
    path: "/blogs",
  },
  {
    title: "Contact us",
    path: "/Contact",
  },
];

const anotherlink = [
  {
    title: "Oil & Gases",
    path: "/Services",
  },
  {
    title: "Industrial Services",
    path: "/Services",
  },
  {
    title: "Health Services",
    path: "/Services",
  },
  {
    title: "Construction Services",
    path: "/Services",
  },
  {
    title: "Information technology",
    path: "/Services",
  },
  {
    title: "Accomodation & Transportation",
    path: "/Services",
  },
  {
    title: "Blue Collar & White Collar",
    path: "/Services",
  },
];

const Footer: React.FC = () => {
  return (
    <main className="bg-black text-white">
      <footer className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-20  gap-10 py-14 lg:px-28 md:px-14 px-4 border-b border-gray-100">
        <section className="md:space-y-0 space-y-4 grid place-items-center relative">
          <figure className="absolute lg:-top-10 md:-top-10 sm:-top-24 -top-20 -left-6">
            <Image
              src="/opusLogo.png"
              alt="logo"
              height={1000}
              width={1000}
              className="w-36 h-36"
            />{" "}
          </figure>
          <p className="text-sm font-medium text-gray-300">
            At OPus, we specialize in providing comprehensive manpower solutions
            tailored to meet the unique needs of our clients across diverse
            industries
          </p>
          {/* <div className="flex gap-4">
          <Image
            src="/icons/facebookicon.png"
            width={30}
            height={30}
            alt="icon"
          />
          <Image src="/icons/instaicon.png" width={30} height={30} alt="icon" />
          <Image
            src="/icons/whatsappicon.png"
            width={30}
            height={30}
            alt="icon"
          />
        </div> */}
        </section>

        <section className="grid sm:items-center xl:place-items-center md:place-items-end place-items-start ">
          <h2 className="font-semibold text-lg">Quick Links</h2>
          <ul className="space-y-2 mt-4 text-gray-300 text-sm  font-medium">
            {navdata.map((item, index) => (
              <div key={index} className="hover:text-white">
                <Link href={item.path}>{item.title}</Link>
              </div>
            ))}
          </ul>
        </section>

        <section className="grid sm:items-center xl:place-items-center md:place-items-start place-items-start ">
          <h2 className="font-semibold text-lg">Our Services</h2>
          <ul className="space-y-2 mt-4 text-gray-300 text-sm  font-medium">
            {anotherlink.map((item, index) => (
              <div key={index} className="hover:text-white">
                <Link href={item.path}>{item.title}</Link>
              </div>
            ))}
          </ul>
        </section>

        <section className="md:space-y-8 space-y-4 flex flex-col md:items-end ">
          <h2 className="font-semibold text-lg ">Get Latest Updates</h2>
          <p className="md:text-end font-medium text-sm text-gray-300">
            Subscribe to our newsletter and follow us on social media to receive
            timely information.
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter your email"
              className="pl-4 p-2 w-40 bg-white outline-none rounded-tl-xl rounded-bl-xl text-black"
            />
            <button className=" bg-gradient-to-r from-[#26538C]  to-[#00AFF0] hover:bg-gradient-to-r hover:from-[#00AFF0] hover:via-[#26538C] hover:to-[#26538C] duration-750 ease-in-out p-2 px-4 font-medium rounded-tr-xl rounded-br-xl">
              Subscribe
            </button>
          </div>
        </section>
      </footer>

      <div className="flex flex-wrap whitespace-nowrap md:justify-between md:gap-20 justify-center md:px-20 py-4 px-4 sm:pb-4 pb-20">
      <div className=" flex items-center gap-1 justify-center">
          <FaCopyright />
          <h2 className="text-white tracking-wider text-sm">
            2024 <span>|| All Rights Reserved</span>
          </h2>
        </div>

        <div className=" flex items-center gap-1 justify-center">
          {/* <FaCopyright /> */}
          <h2 className="text-white tracking-wider text-sm">
            Designed and Developed by <span className=" font-bold">WebX</span>
          </h2>
        </div>
      </div>
    </main>
  );
};

export default Footer;
