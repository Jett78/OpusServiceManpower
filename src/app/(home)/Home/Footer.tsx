import { Icon } from "@iconify/react/dist/iconify.js";
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
    <main className="bg-zinc-900 text-white">
      <footer className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-20  gap-10 py-14 lg:px-28 md:px-14 px-4 border-b border-gray-100">
        <section className="">
          <figure className="">
            <Image
              src="/opusLogomain.png"
              alt="logo"
              height={1000}
              width={1000}
              className="w-28 object-contain h-10"
            />{" "}
          </figure>
          <p className="text-sm font-medium mt-4 text-gray-300">
            At OPus, we specialize in providing comprehensive manpower solutions
            tailored to meet the unique needs of our clients across diverse
            industries
          </p>
        </section>

        <section className="grid lg:ml-16 xl:place-items-start md:place-items-end">
          <h2 className="font-semibold text-lg">Quick Links</h2>
          <ul className="space-y-2 mt-4 text-gray-300 text-sm  font-medium">
            {navdata.map((item, index) => (
              <div key={index} className="hover:text-white">
                <Link href={item.path}>{item.title}</Link>
              </div>
            ))}
          </ul>
        </section>

        <section className="grid  ">
          <h2 className="font-semibold text-lg">Our Services</h2>
          <ul className="space-y-2 mt-4 text-gray-300 text-sm  font-medium">
            {anotherlink.map((item, index) => (
              <div key={index} className="hover:text-white">
                <Link href={item.path}>{item.title}</Link>
              </div>
            ))}
          </ul>
        </section>

        <section className=" flex flex-col  xl:place-items-start md:place-items-end">
          <h2 className="font-semibold text-lg ">Get in Touch</h2>
          <p className=" font-medium text-sm xl:text-start md:text-end text-gray-300 mt-4">
            Whether you are looking for more information about our services,
            need support, or want to explore partnership opportunities, our team
            is ready to help.
          </p>
          {/* <div className="flex">
            <input
              type="text"
              placeholder="Enter your email"
              className="pl-4 p-2 w-40 bg-white outline-none rounded-tl-xl rounded-bl-xl text-black"
            />
            <button className="bg-[#00AFF0]  hover:bg-blue-500  duration-300 ease-in-out  p-2 px-4 font-medium rounded-tr-xl rounded-br-xl">
              Subscribe
            </button>
          </div> */}
          <div className="flex gap-4 mt-4">
            <Link href="/">
              <Image
                src="/icons/facebookicon.png"
                width={30}
                height={30}
                alt="icon"
              />
            </Link>
            <Link href="/">
              <Image
                src="/icons/instaicon.png"
                width={30}
                height={30}
                alt="icon"
              />
            </Link>
            <Link href="/">
              <Image
                src="/icons/whatsappicon.png"
                width={30}
                height={30}
                alt="icon"
              />
            </Link>
            <div className="bg-white shadow-md w-8 flex justify-center items-center rounded-full">
              <Link href="/">
                <Icon icon="logos:tiktok-icon" />
              </Link>
            </div>
            <div className="bg-[#0a66c2] w-8 flex justify-center items-center rounded-full">
              <Link href="/">
                <Icon icon="skill-icons:linkedin" />
              </Link>
            </div>
          </div>
        </section>
      </footer>

      <div className="flex flex-wrap whitespace-nowrap md:justify-between md:gap-20 sm:gap-6 justify-center md:px-20 py-4 px-4 sm:pb-4 pb-20">
        <div className=" flex items-center gap-1 justify-center">
          <FaCopyright />
          <h2 className="text-white tracking-wider text-sm">
            2024 <span>|| All Rights Reserved</span>
          </h2>
        </div>

        <div className=" flex items-center gap-1 justify-center">
          {/* <FaCopyright /> */}
          <h2 className="text-white tracking-wider text-sm">
            Designed and Developed by{" "}
            <Link
              href="https://webxnep.com/"
              target="_blank"
              rel="noopener noreferrer"
              className=" font-bold"
            >
              WebX
            </Link>
          </h2>
        </div>
      </div>
    </main>
  );
};

export default Footer;
