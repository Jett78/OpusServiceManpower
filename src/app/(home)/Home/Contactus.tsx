import React from "react";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { Form } from "../components/Form";
import Image from "next/image";
const locationinfo = [
  {
    img: <IoLocation />,
    title: "Address",
    desc: "Dubai",
  },
  {
    img: <MdEmail />,
    title: "Email",
    desc: "yourmail@gmail.com",
  },
  {
    img: <IoCall />,
    title: "Contact 1",
    desc: "01-555555",
  },
  {
    img: <IoCall />,
    title: "Contact 2 ",
    desc: "+977-989898989",
  },
];

const Contactus = () => {
  return (
    <main className=" bg-gray-50 md:py-20 py-6">
      <div className="w-11/12 mx-auto flex flex-wrap gap-8 justify-center  rounded-2xl">
        <section className="md:w-[35%]">
          <div className="sticky top-[6rem] left-0">
            <h1 className="header lg:text-5xl md:text-3xl text-2xl font-bold leading-[1.1em] whitespace-nowrap">
              Get in
              <span className="text-gradient"> Touch</span>
            </h1>
            <p className="font-medium font-sans text-sm py-4">
              we value your inquiries and are here to assist you with any
              questions or concerns.Whether you are looking for more information
              about our services, need support, or want to explore partnership
              opportunities, our team is ready to help.
            </p>
            <div className="flex gap-4">
              <Image
                src="/icons/facebookicon.png"
                width={30}
                height={30}
                alt="icon"
              />
              <Image
                src="/icons/instaicon.png"
                width={30}
                height={30}
                alt="icon"
              />
              <Image
                src="/icons/whatsappicon.png"
                width={30}
                height={30}
                alt="icon"
              />
            </div>
          </div>
        </section>
        <section className="md:w-[55%]">
          <div className="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1  grid-cols-2 gap-y-2 gap-x-2">
            {locationinfo.map((item, index) => (
              <div
                key={index}
                className="border shadow-md hover:shadow-lg duration-300 ease-in-out bg-white w-full sm:h-40 rounded-xl p-8 flex flex-col gap-2 items-center justify-center cursor-pointer "
              >
                <div className="sm:text-3xl text-xl text-center animate-bounce text-tertiary">
                  {item.img}
                </div>
                <div>
                  {/* <h2 className="font-bold text-xl">{item.title}</h2> */}
                  <h3 className="font-bold sm:text-2xl text-[12px] font-sans whitespace-nowrap">
                    {item.desc}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <Form />
        </section>
      </div>
    </main>
  );
};

export default Contactus;
