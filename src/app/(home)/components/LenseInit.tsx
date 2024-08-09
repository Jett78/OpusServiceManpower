// Create a separate component to handle Lenis initialization
"use client"; // Only this component is client-side
import { useEffect } from "react";
import Lenis from "lenis";

function LenisInitializer() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e: any) => {
      console.log(e);
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // Cleanup if needed
      lenis.destroy();
    };
  }, []);

  return null;
}

export default LenisInitializer;
