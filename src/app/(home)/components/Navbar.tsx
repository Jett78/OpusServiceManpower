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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navitems = useRef<any>();
  const [bgBlack, setBgBlack] = useState(false);
  const router = usePathname();

  // GSAP animation
  useGSAP(() => {
    const tl = gsap.timeline();

    // gsap.from(".navcontainer", {
    //   opacity: 0,
    //   delay: 0.3,
    //   duration: 1,
    // });
    // tl.from(".logoanimate", {
    //   opacity: 0,
    //   delay: 0.3,
    // });
    // tl.from(navitems.current?.children, {
    //   stagger: 0.1,
    //   y: -20,
    //   delay: 0.5,
    //   opacity: 0,
    // });
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

  return (
    <main>
      <div
        className={`navcontainer shadow-md fixed bg-black overflow-hidden w-full z-[100] ease-in-out duration-500 ${
          isScrolled ? "bg-zinc-800 text-white" : "bg-white"
        }`}
      >
        <main
          className={` overflow-hidden flex justify-between w-full items-center md:py-2 py-2 lg:px-20 md:px-10 px-6 z-50`}
        >
          <figure className="logoanimate sm:left-10 left-2">
            {isScrolled ? (
              <Image
                src="/Logo-white.png"

                alt="logo"
                height={1000}
                width={1000}
                className="w-24 h-10 object-contain"
              />
            ) : (
              <Image
              src="/blacklogo.png"
              alt="logo"
                height={1000}
                width={1000}
                className="w-24 h-10 object-contain"
              />
            )}
          </figure>

          <nav
            className="lg:gap-8 gap-4 md:flex items-center hidden"
            ref={navitems}
          >
            {navdata.map((items, index) => (
              <div key={index} className="list-none">
                <Link
                  href={items.path}
                  className={`font-semibold text-sm navbarhover ${
                    router === items.path
                      ? "text-tertiary active font-bold"
                      : ""
                  }`}
                >
                  {items.title}
                </Link>
              </div>
            ))}
          </nav>

          <Link
            href="/Contact"
            className={` text-white md:block hidden font-semibold text-sm  bg-[#00AFF0]  hover:bg-blue-500  duration-300 ease-in-out rounded-full px-4 py-2`}
          >
            Contact
          </Link>

          <div className="md:hidden block" onClick={toggleMenu}>
            {isMenuOpen ? <GiCrossedBones /> : <GiHamburgerMenu />}
          </div>
        </main>

        {/* Mobile menu */}
        <div className="overflow-x-hidden md:hidden block">
          <div
            className={`${
              isMenuOpen ? "translate-y-0" : "-translate-y-full"
            } ease-in-out duration-300 fixed bg-black w-full h-screen top-0 pt-10 inset-0 overflow-x-hidden`}
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
              <Link
                href="/Contact"
                className="font-semibold text-white text-2xl bg-tertiary rounded-full px-4 py-2"
              >
                Contact
              </Link>
            </div>
            <div
              className="absolute top-10 right-10 z-[200]"
              onClick={() => setIsMenuOpen(false)}
            >
              <GiCrossedBones />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
