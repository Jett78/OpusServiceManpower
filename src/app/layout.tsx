"use client";
import { useEffect, Suspense } from 'react';
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./Home/Footer";
import Lenis from 'lenis';
import Headroom from 'react-headroom';
import MobileButtons from './components/MobileButtons';
import dynamic from 'next/dynamic';
import Loader from './components/Loader';

// const FooterDynamic = dynamic(() => import('./Home/Footer'), {
//   ssr: false,
// });

// const NavbarDynamic = dynamic(() => import('./components/Navbar'), {
//   ssr: false,
// });
// Initialize Lenis once the component is mounted
function initializeLenis() {
  const lenis = new Lenis();

  lenis.on("scroll", (e: any) => {
    console.log(e);
  });

  function raf(time: any) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    initializeLenis();
  }, []);

  return (
    <html lang="en">
      <body>
      <Navbar/>
      <Suspense fallback={<Loader />}>
          {children}
        </Suspense>
      <Footer/>
      <div className='z-[999] fixed botom-0'>
        <MobileButtons/>
        </div>
      </body>
    </html>
  );0
}
