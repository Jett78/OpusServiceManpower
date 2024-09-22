"use client"
import React,{useRef} from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const HowweWork = () => {
const steps = useRef<any>(null)
  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".content",
        start: "top bottom",
        end: "50% 50%",
        scrub: 1,
        // markers: true,
      },
    });

    tl.from(".textsection",{
      x:60,
      duration:1,
      opacity:0,
    })

    tl.from(steps.current?.children,{
      stagger:0.5,
      x:60,
      duration:1,
      opacity:0,
    })
  })

  return (
    <main className="content md:py-20 text-white py-10 bg-zinc-900">
      <div className="lg:w-10/12 w-11/12 mx-auto flex flex-wrap justify-center gap-20">
        <div className="xl:w-[50%]">
          {/* Updated sticky section */}
          <section className="textsection sticky top-28">
            <h2 className="text-tertiary uppercase font-bold text-xl w-fit my-4">
              How we work
            </h2>
            <h2 className="lg:text-4xl md:text-3xl text-3xl font-semibold leading-[1.1em]">
              Learn more about our working process
            </h2>
            <p className="font-medium text-lighttext md:text-lg text-[12px] my-6 max-w-[30em] min-w-[20em]">
              We are a team of experienced recruiters, researchers, and account
              managers with over ten years of experience in HR consulting and an
              impressive track record of successful placements.
            </p>
          </section>
        </div>

        <section className="imgsection grid gap-10 xl:grid-cols-1 md:grid-cols-2" ref={steps}>
          {howwork.map((item, index) => (
            <div key={index} className="relative flex items-start gap-2">
              <div className="gradient min-h-4 min-w-4 rounded-full relative z-10"></div>
              <div className="shadow-md p-3 rounded-lg">
                <div className="flex gap-2">
                  <h2 className="font-bold text-2xl font-sans text-tertiary">
                    {item.num}.
                  </h2>
                  <h2 className="font-bold text-2xl font-sans text-tertiary">
                    {item.title}
                  </h2>
                </div>
                <p className="font-medium md:text-md text-sm leading-6 max-w-[25em] py-2">
                  {item.desc}
                </p>
              </div>
              <div className="absolute border h-[8em] border-dashed top-4 left-1.5"></div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default HowweWork;

const howwork = [
    {
        num:"1",
        title:"Research",
        desc:"Through meaningful and objective research into your organization, competitors, and marketplace, we strive to understand your hiring needs and requirements.Partner Analysis",
    },
    {
        num:"2",
        title:"Analaysis",
        desc:"We work diligently to understand the strengths and capabilities of our manpower supply partners, ensuring they meet the highest standards of quality and reliability.Requirement Gathering.",
    },
    {
        num:"3",
        title:"Planning",
        desc:"Documenting a detailed job description is vital to a successful search. We collaborate with you to capture all necessary qualifications and expectations.Execution",
    },
    {
        num:"4",
        title:"Execution",
        desc:"Our team manages expectations, maintains open communications with you and the candidates, and expertly facilitates the negotiation process through to its successful completion.",
    },
]