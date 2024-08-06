"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import Headroom from "react-headroom";
import { GiCrossedBones } from "react-icons/gi";

import Image from "next/image";

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
    path: "/blog",
  },
  {
    title: "Contact us",
    path: "/Contact",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    // Close the menu when the route changes
    setIsMenuOpen(false);
  }, [router]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);


  return (
    <Headroom>
      <div className="overflow-hidden w-full z-[200]">
        <main
          className={`relative overflow-hidden bg-[#224a7f] bg-opacity-90 bg-blend-overlay bg-clip-padding backdrop-filter backdrop-blur-xl  text-white flex justify-end  top-0 left-0 w-full items-center py-6 lg:px-20 md:px-10 px-6 z-50`}
        >
          <figure className="absolute sm:left-10 left-2">
            <Image
              src="/opusLogo.png"
              alt="logo"
              height={1000}
              width={1000}
              className="w-36 h-36"
            />{" "}
          </figure>

          <nav className="gap-10 md:flex hidden">
            {navdata.map((items, index) => (
              <div key={index} className="list-none">
                <Link
                  href={items.path}
                  className={`font-semibold navbarhover ${
                    router === items.path ? "text-tertiary font-bold" : ""
                  }`}
                >
                  {items.title}
                </Link>
              </div>
            ))}
          </nav>

          <div className="md:hidden block" onClick={toggleMenu}>
            {isMenuOpen ? <GiCrossedBones />: <GiHamburgerMenu />  }
          </div>
        </main>

        {/* another navbar */}
        <div className="overflow-x-hidden">
          <div
            className={`${
              isMenuOpen ? "translate-y-0" : "-translate-y-full"
            } ease-in-out duration-300 absolute bg-[#224a7f] w-full h-screen top-0 pt-10 inset-0 overflow-x-hidden`}
          >
            <div className="grid place-items-center justify-center gap-8 pt-28">
              {navdata.map((items, index) => (
                <div key={index} className="list-none ">
                  <Link
                    href={items.path}
                    className={`font-semibold text-white text-3xl ${
                      router === items.path ? "text-[#00AFF0] font-bold" : "text-white"
                    }`}
                  >
                    {items.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Headroom>
  );
};

export default Navbar;
