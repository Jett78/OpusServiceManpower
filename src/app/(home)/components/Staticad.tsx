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
        <div className="relative bg-white p-4 rounded-md shadow-lg">
          <button
            className="absolute -top-10 -right-20 outline-none m-2 text-3xl"
            onClick={handleCloseAd}
          >
          <Icon icon="material-symbols:cancel"  style={{color: "black"}} />
          </button>
          <Image
            src="/ads.jpg"
            alt="Ad"
            width={500}
            height={300}
            className="object-cover"
          />
          <p className="text-center mt-2">Check out our latest offer!</p>
        </div>
      </div>
    )}
  </>
  )
}

export default Staticad