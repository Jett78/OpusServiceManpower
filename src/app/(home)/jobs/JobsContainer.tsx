import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image"

const JobsContainer = () => {
  return (
    <main className="md:pt-28 pt-20 md:w-10/12 w-10/12 mx-auto overflow-hidden">
      <h2 className="font-extrabold text-3xl uppercase text-gradient w-fit mx-auto">
        Jobs Opening
      </h2>
      <p className=" font-medium text-md md:max-w-[65em] w-full md:mx-auto mx-2 py-2 text-center sm:text-l text-sm">
        Explore a world of opportunities with our latest job openings. Whether
        you're looking to grow your career or take the next step, we have the
        perfect role waiting for you. Start your journey today!
      </p>

      <div className="grid md:grid-cols-3 gap-10 md:my-20 my-10">
        {jobsdata.map((item, index) => (
          <div
            key={index}
            className="p-4 border-2 border-zinc-400 bg-gray-100/50  rounded-2xl"
          >
            <div>
                 <div className="flex flex-col justify-between gap-2">
                 <Image src="/companylogo.jpg" alt="companylogo" width={1000} height={1000} className="max-h-10 max-w-10 rounded-full"/>

                 <h2 className="md:text-lg font-semibold h-10">{item.title}</h2>
                 </div>
            </div>
            <p className="font-regular  md:text-base text-sm py-8">{item.desc}</p>

            <div className="flex flex-col flex-wrap justify-between gap-2">
              <div className="flex flex-wrap items-center sm:gap-4 gap-2">
                <div className="flex gap-2 items-center ">
                  <Icon icon="mdi:location" style={{ color: "black" }} />
                  <h3 className="font-semibold md:text-base text-sm">{item.location}</h3>
                </div>
                <div className="flex gap-2 items-center">
                  <Icon icon="mingcute:time-line" style={{ color: "black" }} />{" "}
                  <h3 className="font-semibold md:text-base text-sm">{item.type}</h3>
                </div>
              </div>
              <Link href={`/jobs/${index}`}>
              <div className="flex items-center gap-2 cursor-pointer mt-4 pl-2">
                <h2 className="font-semibold md:text-base text-sm text-tertiary">Know More</h2>
                <Icon icon="mingcute:arrow-right-line"  style={{color: "black"}} />
              </div></Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default JobsContainer;

const jobsdata = [
  {
    title: "Investor Relations Manager - Riyadh, KSA",
    desc: "Our client, one of the companies under the Sovereign fund of Abu Dhabi, is looking to hire an Investor Relations Manager - Abu Dhabi (Emiratisation Initiative seeking Emirati talent",
    location: "Riyadh",
    date: "2024-09-11",
    type: "full time",
  },
  {
    title: "Frontend Developer - Emirates,UAE",
    desc: "Our client, one of the companies under the Sovereign fund of Abu Dhabi, is looking to hire an Investor Relations Manager - Abu Dhabi (Emiratisation Initiative seeking Emirati talent",
    location: "Riyadh",
    date: "2024-09-11",
    type: "full time",
  },
  {
    title: "Finance Manager - Riyadh, KSA",
    desc: "Our client, one of the companies under the Sovereign fund of Abu Dhabi, is looking to hire an Investor Relations Manager - Abu Dhabi (Emiratisation Initiative seeking Emirati talent",
    location: "Riyadh",
    date: "2024-09-11",
    type: "full time",
  },
  {
    title: "Document Officer - Riyadh, KSA",
    desc: "Our client, one of the companies under the Sovereign fund of Abu Dhabi, is looking to hire an Investor Relations Manager - Abu Dhabi (Emiratisation Initiative seeking Emirati talent",
    location: "Riyadh",
    date: "2024-09-11",
    type: "full time",
  },
  {
    title: "Drivers - Riyadh, KSA",
    desc: "Our client, one of the companies under the Sovereign fund of Abu Dhabi, is looking to hire an Investor Relations Manager - Abu Dhabi (Emiratisation Initiative seeking Emirati talent",
    location: "Riyadh",
    date: "2024-09-11",
    type: "full time",
  },
  {
    title: "Oil Extractor - Riyadh, KSA",
    desc: "Our client, one of the companies under the Sovereign fund of Abu Dhabi, is looking to hire an Investor Relations Manager - Abu Dhabi (Emiratisation Initiative seeking Emirati talent",
    location: "Riyadh",
    date: "2024-09-11",
    type: "full time",
  },
];
