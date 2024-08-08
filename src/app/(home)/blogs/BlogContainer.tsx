"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";


const BlogContainer: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(6); // Default items per page

  useEffect(() => {
    // Update itemsPerPage based on screen size
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(6);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  const totalPages = Math.ceil(blogdata.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top of the page

    }
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = blogdata.slice(startIndex, startIndex + itemsPerPage);
  return (
    <div className=" pt-10">
      <h2 className="font-extrabold text-3xl uppercase text-black w-fit mx-auto">
        Featured <span className="text-gradient">Blogs</span>
      </h2>
      <p className=" font-medium text-md max-w-[60em] md:mx-auto mx-2 sm:text-l text-sm py-2 text-center">
        Stay updated with the latest insights and trends in the industry through
        our featured blogs. Our expert-written articles cover a wide array of
        topics, offering valuable information and practical advice to help you
        stay ahead in your field.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-11/12 mx-auto my-16">
        {currentItems.map((item, index) => (
          <Link key={index} href={`/blogs/${index}`}>
            <div>
              <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                <figure className="relative overflow-hidden rounded-lg h-80 hover:scale-90 ease-in-out duration-300">
                  <Image
                    src={item.img}
                    alt="team"
                    width={700}
                    height={1000}
                    className="h-80 w-full object-cover rounded-lg overflow-hidden hover:brightness-50"
                  />
                  <p className="hidden  group-hover:block absolute text-white top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2">
                    Read More
                  </p>
                </figure>

                <div className="bg-white p-4 sm:p-6">
              

                  <h3 className="font-bold text-xl">{item.title}</h3>

                  <p className="text-[14px] py-2 font-medium text-lighttext">
                    {item.desc}
                  </p>
                  <p className="text-tertiary font-medium text-[12px]">Find Out More</p>
                </div>
              </article>
            </div>
          </Link>
        ))}
      </div>

     


      {/* Pagination Controls */}
      <div className="flex justify-center gap-4 my-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-2 py-2 text-white bg-black rounded-full font-semibold  disabled:bg-black cursor-pointer"
        >
          <FaChevronLeft />
          {""}
        </button>
        <span className="flex items-center font-semibold font-sans">
          {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-2 py-2 text-white bg-black rounded-full disabled:bg-black cursor-pointer"
        >
          {""}
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default BlogContainer;


const blogdata = [
  {
    img: "/servicesimg/services1.jpg",
    title: "What is Remote Closing & Why You Need a Remote Closer",
    desc: "Remote closing refers to the process of completing sales transactions and finalizing deals without the necessity for face-to-face interaction..",
    time: "12 July 2024",
  },
  {
    img: "/servicesimg/services2.jpg",
    title: "Need of Construction services Worldwide Due to Low Human Resource",
    desc: "One of the primary reasons to utilize a remote closer is the ability to expand your reach. By engaging with clients globally, businesses can operate.",
    time: "12 July 2024",
  },
  {
    img: "/servicesimg/services3.jpg",
    title: "Strategic Palnning with Financial Management",
    desc: " Moreover, remote closers bring specialized skills focused on closing sales, leading to increased productivity through streamlined digital processes.",
    time: "12 July 2024",
  },
  {
    img: "/servicesimg/services4.jpg",
    title: "Long-term strategic plan with business goals",
    desc: "Remote closing has gained significant traction, particularly in the context of the global shift towards remote work and digital transformation.",
    time: "12 July 2024",
  },
];