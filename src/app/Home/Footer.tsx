import Image from "next/image";
import React from "react";
import { FaCopyright } from "react-icons/fa6";


const Footer = () => {
  return (
   <main className="bg-black text-white">
      <footer className="grid grid-cols-4 py-14 px-28 border-b border-gray-600">
      <section className="space-y-4">
        <h2 className="font-bold text-2xl">Logo</h2>
        <p className="text-sm font-medium text-lighttext">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          eveniet quas error quam quasi nesciunt recusandae autem corporis ut
          eos ratione, aspernatur et saepe vitae laudantium eius aliquid eum?
          Doloribus?
        </p>
        {/* <div className="flex gap-4">
          <Image
            src="/icons/facebookicon.png"
            width={30}
            height={30}
            alt="icon"
          />
          <Image src="/icons/instaicon.png" width={30} height={30} alt="icon" />
          <Image
            src="/icons/whatsappicon.png"
            width={30}
            height={30}
            alt="icon"
          />
        </div> */}
      </section>

      <section className="grid items-center place-items-center text-center">
        <h2 className="font-semibold text-lg">Quick Links</h2>
        <ul className="space-y-2 mt-4 text-lighttext font-medium">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Career</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
      </section>

      <section className="flex flex-col items-center">
        <h2 className="font-semibold text-lg">Our Services</h2>
        <ul className="space-y-2 mt-4 text-center text-lighttext font-medium">
          <li>Outsourcing</li>
          <li>Outstaffing</li>
          <li>Business Assistance</li>
          <li>Marketting</li>
        </ul>
      </section>

      <section className="space-y-4 flex flex-col items-end">
        <h2 className="font-semibold text-lg ">Get Latest Updates</h2>
        <p className="text-end font-medium text-lighttext">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          quis!
        </p>
        <div className="">
          <input
            type="text"
            placeholder="Enter your email"
            className="p-2 bg-white outline-none rounded-tl-xl rounded-bl-xl text-black"
            style={{ '::placeholder': { color: 'white', fontWeight: 'bold' } }}

          />
          <button className="gradient p-2 font-semibold rounded-tr-xl rounded-br-xl">
            Subscribe
          </button>
        </div>
      </section>
    </footer>

    <div className="py-4 flex items-center gap-1 justify-center">
    <FaCopyright />

      <h2 className="text-white tracking-wider text-sm">Designed and Developed by <span className=" font-bold">WebX</span></h2>
    </div>
   </main>
  );
};

export default Footer;
