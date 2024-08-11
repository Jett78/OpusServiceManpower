import React from "react";
import HeroSection from "./HeroSection";
import AboutUs from "./AboutUs";
import WhyUs from "./WhyUs";
import Chairmanmssg from "./Chairmanmssg";
import OurServices from "./OurServices";
import Testimoinals from "./Testimoinals";
import Contactus from "./Contactus";
import Slider from "./Slides";
import Cta from "./Cta";
import Vocational from "./Vocational";
import Preloader from "../components/Preloader";
const Page = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <WhyUs />
      <Slider />
      <Chairmanmssg />
      <OurServices />
      <Testimoinals />
      {/* <Cta/> */}
      <Vocational />
      <Contactus />
    </div>
  );
};

export default Page;
