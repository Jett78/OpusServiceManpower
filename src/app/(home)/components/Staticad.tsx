"use client"
import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const Staticad = () => {
    const [showAd, setShowAd] = useState(false);

//   useEffect(() => {
//     // Check if the user has visited before
//     const hasVisited = localStorage.getItem("hasVisited");

//     if (!hasVisited) {
//       // If it's the first visit, show the ad
//       setShowAd(true);
//       // Set a flag in localStorage to indicate the user has visited
//       localStorage.setItem("hasVisited", "true");
//     }
//   }, []);

useEffect(() => {
    const timer = setTimeout(() => {
      setShowAd(true); // Show ad after 3 seconds
    }, 6000); // 3000 ms = 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  const handleCloseAd = () => {
    setShowAd(false); // Close the ad when the user dismisses it
  };
  return (
    <>
    {showAd && (
      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/50 backdrop-filter backdrop-blur-sm bg-opacity-50 z-[200]">
        <div className="relative  md:w-[25em] md:h-[30em] h-[20em] w-[18em]  p-2 rounded-md ">
          <button
            className="absolute -top-10 -right-4 outline-none m-2 text-3xl"
            onClick={handleCloseAd}
          >
          <Icon icon="material-symbols:cancel"  style={{color: "#ffffff"}} />
          </button>
          <Image
            src="/ads.jpg"
            alt="Ad"
            width={1000}
            height={1000}
            className=" h-full"
          />
        </div>
      </div>
    )}
  </>
  )
}

export default Staticad