"use client"
import React, { useEffect } from "react";
// import { animatePgeIn } from "./utils/animation";
import Navbar from "./components/Navbar";

const Template = ({ children }: { children: React.ReactNode }) => {
    // useEffect(() => {
    //     animatePgeIn()
    // },[])
  return (
    <main>
      {/* <div
        id="banner-1"
        className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-0 w-1/4"
      />
      <div
        id="banner-2"
        className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-1/4 w-1/4"
      />
      <div
        id="banner-3"
        className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-2/4 w-1/4"
      />
      <div
        id="banner-4"
        className="min-h-screen bg-neutral-950 z-10 fixed top-0 left-3/4 w-1/4"
      />
      <div className="relative z-[200]">

      </div> */}
      {children}
    </main>
  );
};

export default Template;
