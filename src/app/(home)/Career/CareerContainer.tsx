// "use client"
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { IoLocation } from "react-icons/io5";
// import { BiDollar } from "react-icons/bi";
// import { IoMdTime } from "react-icons/io";
// import { HoverEffect } from "../components/ui/card-hover-effect";
// import Link from "next/link";

// const jobs = [
//   {
//     img: "/icons/facebookicon.png",
//     company: "Apple",
//     role: "Software Engineer",
//     desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eligendi. Sapiente corporis natus nesciunt vero obcaecati qui et veniameos.",
//     salary: "10k - 20k",
//     type: "Full-Time",
//     location: "California",
//     updatedon: "2",
//   },
//   {
//     img: "/icons/instaicon.png",
//     company: "Facebook",
//     role: "Data Engineer",
//     desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eligendi. Sapiente corporis natus nesciunt vero obcaecati qui et veniameos.",
//     salary: "50k - 60k",
//     type: "Part-Time",
//     location: "New-York",
//     updatedon: "18",
//   },
//   {
//     img: "/icons/whatsappicon.png",
//     company: "Instagram",
//     role: "Cyber Security",
//     desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eligendi. Sapiente corporis natus nesciunt vero obcaecati qui et veniameos.",
//     salary: "20k - 25k",
//     type: "Full-Time",
//     location: "San Francisco",
//     updatedon: "6",
//   },
//   {
//     img: "/icons/instaicon.png",
//     company: "IBM",
//     role: "Backend Developer",
//     desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eligendi. Sapiente corporis natus nesciunt vero obcaecati qui et veniameos.",
//     salary: "80k - 100k",
//     type: "Full-Time",
//     location: "New-York",
//     updatedon: "10",
//   },
//   {
//     img: "/icons/whatsappicon.png",
//     company: "Invisible",
//     role: "Software Engineer",
//     desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eligendi. Sapiente corporis natus nesciunt vero obcaecati qui et veniameos.",
//     salary: "65k - 70k",
//     type: "Part-Time",
//     location: "Dublin",
//     updatedon: "8",
//   },
//   {
//     img: "/icons/facebookicon.png",
//     company: "Google",
//     role: "DevOps Engineer",
//     desc: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eligendi. Sapiente corporis natus nesciunt vero obcaecati qui et veniameos.",
//     salary: "45k - 50k",
//     type: "Part-Time",
//     location: "Los Angelas",
//     updatedon: "16",
//   },
// ];
// const page:React.FC = () => {

//   const [currentPage, setCurrentPage] = useState<HTMLDivElement>(1);
//   const [itemsPerPage, setItemsPerPage] = useState<HTMLDivElement>(6); // Default items per page

//   useEffect(() => {
//     // Update itemsPerPage based on screen size
//     const updateItemsPerPage = () => {
//       if (window.innerWidth < 640) {
//         setItemsPerPage(3);
//       } else {
//         setItemsPerPage(6);
//       }
//     };

//     updateItemsPerPage();
//     window.addEventListener("resize", updateItemsPerPage);

//     return () => {
//       window.removeEventListener("resize", updateItemsPerPage);
//     };
//   }, []);

//   const totalPages = Math.ceil(jobs.length / itemsPerPage);

//   const handlePageChange = (newPage: number) => {
//     if (newPage > 0 && newPage <= totalPages) {
//       setCurrentPage(newPage);
//     }
//   };

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const currentItems = jobs.slice(startIndex, startIndex + itemsPerPage);
//   return (
//     <div className="pt-10">
//       <h2 className="font-extrabold text-3xl uppercase text-gradient w-fit mx-auto">
//         Career
//       </h2>
//       <p className=" font-medium text-md max-w-[60em] md:mx-auto mx-2 py-2 text-center sm:text-l text-sm">
//         Join our dynamic team and embark on a rewarding career path. We offer
//         exciting opportunities across various sectors, providing a platform for
//         professional growth and development. Discover your potential with us and
//         make a meaningful impact in your chosen career.
//       </p>

//       <div className="w-11/12 mx-auto sm:w-full flex flex-wrap gap-10 justify-center my-10">
//         {currentItems.map((item, index) => (
//           <div
//             key={index}
//             className="border group hover:bg-gray-100 ease-in-out duration-300 cursor-pointer border-[#00AFF0] rounded-lg p-6 sm:w-[25%]"
//           >
//             <div className="flex gap-6 border-b pb-2">
//               <Image
//                 src={item.img}
//                 alt="team"
//                 width={60}
//                 height={50}
//                 className=" object-cover rounded-full"
//               />

//               <div>
//                 <h2 className="text-2xl font-bold text-gray-900">
//                   {" "}
//                   {item.company}
//                 </h2>
//                 <h3 className="font-semibold text-sm text-lighttext">
//                   {item.type}
//                 </h3>
//               </div>
//             </div>

//             <div className="my-6">
//               <h2 className="font-bold text-2xl">{item.role}</h2>
//               <div className="flex justify-between my-2 font-semibold text-sm text-lighttext">
//                 <p className="flex flex-row-reverse items-center gap-1">
//                   {item.location}
//                   <IoLocation size={18} />
//                 </p>
//                 <p className="flex flex-row-reverse items-center gap-1">
//                   {item.salary} <BiDollar size={18} />
//                 </p>
//                 <p className="flex flex-row-reverse items-center gap-1">
//                   {item.type}
//                   <IoMdTime size={18} />
//                 </p>
//               </div>
//             </div>

//             <p className="font-semibold sm:my-6 my-2 text-lighttext sm:text-l text-sm">
//               {item.desc}
//             </p>
//             <p className="font-semibold text-md">{item.updatedon} days ago</p>

//             <div className="flex justify-end items-end ">
//              <Link href="/JobDetails">
//              <button className="w-[140px] bg-black font-bold h-[45px] my-3 flex items-center justify-center rounded-full cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md group-hover:scale-105 group-hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#CC1587] before:via-[#26538C] before:to-[#00AFF0] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl group-hover:before:left-0 text-[#fff]">
//                 View More
//               </button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>

//        {/* Pagination Controls */}
//        <div className="flex justify-center gap-4 my-4">
//         <button
//           onClick={() => handlePageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="px-4 py-2 text-black font-semibold rounded-md disabled:opacity-50"
//         >
//           Previous
//         </button>
//         <span className="flex items-center">{currentPage} of {totalPages}</span>
//         <button
//           onClick={() => handlePageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 font-semibold text-black rounded-md disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default page;
"use client";
import React from "react";
import Image from "next/image";
import { FaHandPointRight } from "react-icons/fa";
import Cta from "../Home/Cta";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const CareerContainer = () => {
  useGSAP(() => {
    gsap.from(".textright", {
      opacity: 0,
      x: -200,
      duration: 1.5,
    });
    gsap.from(".imgleft", {
      opacity: 0,
      x: 100,
      duration: 1,
    });
  });
  return (
    <main className="pt-10 w-11/12 mx-auto overflow-hidden">
      <h2 className="font-extrabold text-3xl uppercase text-gradient w-fit mx-auto">
        Career
      </h2>
      <p className=" font-medium text-md max-w-[65em] md:mx-auto mx-2 py-2 text-center sm:text-l text-sm">
        We find solutions for your manpower needs by thoroughly understanding
        your requirements and providing skilled professionals who meet your
        exact specifications. Our tailored strategies ensure you have the right
        workforce to achieve your business goals efficiently.{" "}
      </p>

      <div className="imgleft flex flex-wrap flex-row-reverse items-center justify-center gap-20 lg:my-20 md:my-10 my-6">
        <section>
          <figure>
            <Image
              src="/servicesimg/services1.jpg"
              alt="team"
              width={1000}
              height={1000}
              className=" object-cover w-[50em] max-h-[35em] rounded-2xl"
            />
          </figure>
        </section>

        <section className="grid gap-6 2xl:max-w-[30%] w-full textright">
          {careerdetails.map((item, index) => (
            <div key={index} className="">
              <div className="flex items-center gap-4">
                <p className="text-tertiary">
                  <FaHandPointRight />
                </p>
                <h2 className="md:text-2xl  font-semibold border-l border-b rounded-xl shadow-sm w-full p-2">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </section>
      </div>

      <Cta />
    </main>
  );
};

export default CareerContainer;

const careerdetails = [
  {
    title: "Oil & Gas",
  },
  {
    title: "Construction & real State  ",
  },
  {
    title: "Finance & Banking",
  },
  {
    title: "Information technology",
  },
  {
    title: "HealthCare",
  },
  {
    title: "Tourism & Hospitality",
  },
  {
    title: "Engineering & Manufacturing",
  },
  {
    title: "Administrative & Support services",
  },
];
