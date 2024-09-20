// export async function generateStaticParams() {
//   return matcheddata.map((_, index) => ({
//     id: index.toString(),
//   }));
// }

// export async function generateMetadata({ params }: { params: { id: string } }) {
//   const dealdata = matcheddata[parseInt(params.id, 10)];
//   if (!dealdata) {
//     return {
//       title: "Blog not found",
//     };
//   }
//   return {
//     title: dealdata.title,
//   };
// }
"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useState } from "react";
import Applyform from "../../components/Applyform";

export default function Page({ params }: { params: { id: string } }) {
  const [active, Setactive] = useState(false);
  // Overlay click handler
  const closeDropdown = () => {
    Setactive(false);
  };

  const jobs = jobsdata[parseInt(params.id, 10)];

  if (!jobs) {
    return <div>Jobs not found</div>;
  }

  return (
    <main className="pt-28">
      {/* <h2 className="font-bold text-center text-2xl">Job Details</h2> */}
      <div className="my-20 lg:w-7/12 w-11/12 mx-auto border-2 rounded-2xl lg:p-10 p-4 mt-2">
        <h2 className="md:text-xl text-md font-bold">{jobs.title}</h2>
        <section className="flex flex-wrap justify-between">
          <div className="grid grid-cols-2 gap-2 w-[30em] my-8">
            <div className="flex gap-2 items-center w-fit">
              <Icon icon="mdi:location" style={{ color: "#01adee" }} />
              <h3 className="font-semibold md:text-base text-xs">
                Emirates Gas Pvt Ltd
              </h3>
            </div>
            <div className="flex gap-2 items-center w-fit">
              <Icon icon="mdi:location" style={{ color: "#01adee" }} />
              <h3 className="font-semibold md:text-base text-xs">Dubai</h3>
            </div>
            <div className="flex gap-2 items-center w-fit">
              <Icon icon="uiw:date" style={{ color: "#01adee" }} />{" "}
              <h3 className="font-semibold md:text-base text-xs">
                August 10 2024
              </h3>
            </div>
            <div className="flex gap-2 items-center w-fit">
              <Icon icon="mingcute:time-fill" style={{ color: "#01adee" }} />
              <h3 className="font-semibold md:text-base text-xs">Full Time</h3>
            </div>
            <div className="flex gap-2 items-center w-fit">
              <Icon icon="mage:dollar-fill" style={{ color: "#01adee" }} />{" "}
              <h3 className="font-semibold md:text-base text-xs">100 AED</h3>
            </div>
            <div className="flex gap-2 items-center w-fit">
              <Icon icon="ion:home" style={{ color: "#01adee" }} />
              <h3 className="font-semibold md:text-base text-xs">
                Foods & Accomodation
              </h3>
            </div>
          </div>

          <figure>
            <Image
              src="/vacancy.png"
              alt="vacanacy"
              width={1000}
              height={1000}
              className="w-48 h-52"
            />
          </figure>
        </section>

        <section className="space-y-8 mt-4">
          <div>
            <h2 className="font-bold">About Company</h2>
            <p className="text-sm font-semibold mt-3">
              We are a leading construction firm based in Dubai, UAE,
              specializing in large-scale infrastructure projects. With a
              commitment to quality and innovation, we pride ourselves on
              delivering exceptional results while fostering a collaborative and
              supportive work environment. We are a leading construction firm
              based in Dubai, UAE, specializing in large-scale infrastructure
              projects. With a commitment to quality and innovation, we pride
              ourselves on delivering exceptional results while fostering a
              collaborative and supportive work environment.
            </p>
          </div>
          <div>
            <h2 className="font-bold">Job Details & Responsibilities</h2>
            <p className="text-sm font-semibold mt-3">
              We are a leading construction firm based in Dubai, UAE,
              specializing in large-scale infrastructure projects. With a
              commitment to quality and innovation, we pride ourselves on
              delivering exceptional results while fostering a collaborative and
              supportive work environment. We are a leading construction firm
              based in Dubai, UAE, specializing in large-scale infrastructure
              projects. With a commitment to quality and innovation, we pride
              ourselves on delivering exceptional results while fostering a
              collaborative and supportive work environment.
            </p>
          </div>
          <div>
            <h2 className="font-bold">Skills & Responsibilities</h2>
            <p className="text-sm font-semibold mt-3">
              As a Construction Laborer, you will be responsible for supporting
              various construction projects by performing manual tasks such as
              digging, lifting, and transporting materials. Duties include
              assisting with site preparation, ensuring safety protocols are
              followed, and collaborating with other workers to complete
              projects efficiently and on schedule." The ideal candidate will
              have previous experience in a labor-intensive role, preferably in
              construction. Strong physical stamina and the ability to work in
              various weather conditions are essential. Candidates should have a
              good understanding of safety regulations and be able to follow
              instructions accurately. Experience with operating basic
              construction tools and machinery is a plus.
            </p>
          </div>
          <button
            className="button-gradient"
            onClick={() => Setactive(!active)}
          >
            Apply Now
          </button>
        </section>
      </div>
      {/* --Dark overlay-- */}
      <div className="z-[999] relative">
        {active && (
          <>
            {/* Dark overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-50 bg-blend-overlay bg-clip-padding backdrop-filter backdrop-blur-sm  z-[1000]"
              onClick={closeDropdown}
            ></div>

            {/* Applyform modal */}
            <div className="fixed inset-0 z-[1000] flex justify-center items-center">
              <div className="bg-white p-8 rounded-md shadow-lg">
                <Applyform closeDropdown={closeDropdown} />
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

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
