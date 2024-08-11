// components/MainContent.tsx
"use client";

import { useState, useEffect } from "react";

import Navbar from "./(home)/components/Navbar";
import Preloader from "./(home)/components/Preloader";
import Footer from "./(home)/Home/Footer";
import MobileButtons from "./(home)/components/MobileButtons";

export default function MainContent({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or any initialization
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <div className="z-[200] relative">
        <Navbar />
      </div>
      <div>{children}</div>
      <Footer />
      <div className="z-[999] fixed botom-0">
        <MobileButtons />
      </div>
    </>
  );
}