"use client";
import React, { useEffect, useState } from "react";
import { IoHome } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { FaServicestack } from "react-icons/fa";
import { BiSolidPlaneAlt } from "react-icons/bi";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navitems = [
  {
    title: "Contact",
    img: <IoCall />,
    path: "/Contact",
  },
  {
    title: "Home",
    img: <IoHome />,
    path: "/",
  },
  {
    title: "Services",
    img: <BiSolidPlaneAlt />,
    path: "/Services",
  },
];

const MobileButtons = () => {
  const pathname = usePathname();

  return (
    <main>
      <div className="bg-gradient-to-t from-[#26538C] via-[#26538C] to-[#0d99cb] w-full h-16 z-[999] fixed bottom-0 sm:hidden flex justify-between px-6 items-center ">
        {navitems.map((item, index) => (
          <div key={index} className="flex justify-center items-center">
            <Link
              href={item.path}
              className="flex flex-col items-center justify-center"
            >
              <h2
                className={`text-2xl ${
                  pathname === item.path ? "text-tertiary" : "text-white"
                }`}
              >
                {item.img}
              </h2>
              <h2 className="text-white text-sm font-medium">{item.title}</h2>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MobileButtons;
