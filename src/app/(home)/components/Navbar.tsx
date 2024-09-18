"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import Headroom from "react-headroom";
import { GiCrossedBones } from "react-icons/gi";
import gsap from "gsap";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

const navdata = [
  { title: "Home", path: "/" },
  { title: "About", path: "/About" },
  { title: "Services", path: "/Services" },
  { title: "Career", path: "/Career" },
    { title: "Jobs", path: "/jobs" },

  { title: "Blog", path: "/blogs" },
];

const Navbar = () => {
  const navitems = useRef<any>();
  const [bgBlack, setBgBlack] = useState(false);
  const router = usePathname();

  // GSAP animation
  useGSAP(() => {
    const tl = gsap.timeline();

    gsap.from(".navcontainer", {
      opacity: 0,
      delay: 0.3,
      duration: 1,
    });
    tl.from(".logoanimate", {
      opacity: 0,
      delay: 0.3,
    });
    tl.from(navitems.current?.children, {
      stagger: 0.1,
      y: -20,
      delay: 0.5,
      opacity: 0,
    });
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // Set navbar background based on the current page
  // useEffect(() => {
  //   if (router === "/") {
  //     const handleScroll = () => {
  //       if (window.scrollY > 50) {
  //         setBgBlack(true);
  //       } else {
  //         setBgBlack(false);
  //       }
  //     };

  //     window.addEventListener("scroll", handleScroll);
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   } else {
  //     setBgBlack(true); // Set bg black on all other pages
  //   }
  // }, [router]);

  return (
    <Headroom>
      <div
        className={`navcontainer bg-black overflow-hidden w-full z-[200] ${
          bgBlack
            ? "bg-black bg-opacity-90 bg-blend-overlay backdrop-filter backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <main
          className={`relative overflow-hidden bg-zinc-900 text-white flex justify-end top-0 left-0 w-full items-center py-5 lg:px-20 md:px-10 px-6 z-50`}
        >
          <figure className="logoanimate absolute sm:left-10 left-2">
            <Image
              src="/opusLogo.png"
              alt="logo"
              height={1000}
              width={1000}
              className="w-36 h-36"
            />
          </figure>

          <nav className="gap-14 md:flex items-center hidden" ref={navitems}>
            {navdata.map((items, index) => (
              <div key={index} className="list-none">
                <Link
                  href={items.path}
                  className={`font-semibold text-sm navbarhover ${
                    router === items.path ? "text-tertiary active font-bold" : ""
                  }`}
                >
                  {items.title}
                </Link>
              </div>
            ))}
            <Link href="/Contact" className="font-semibold text-sm  bg-tertiary rounded-full px-4 py-2">Contact</Link>
          </nav>

          <div className="md:hidden block" onClick={toggleMenu}>
            {isMenuOpen ? <GiCrossedBones /> : <GiHamburgerMenu />}
          </div>
        </main>

        {/* Mobile menu */}
        <div className="overflow-x-hidden">
          <div
            className={`${
              isMenuOpen ? "translate-y-0" : "-translate-y-full"
            } ease-in-out duration-300 absolute bg-black w-full h-screen top-0 pt-10 inset-0 overflow-x-hidden`}
          >
            <div className="grid place-items-center justify-center gap-8 pt-28">
              {navdata.map((items, index) => (
                <div key={index} className="list-none ">
                  <Link
                    href={items.path}
                    className={`font-semibold text-white text-3xl ${
                      router === items.path
                        ? "text-[#00AFF0] font-bold"
                        : "text-white"
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
