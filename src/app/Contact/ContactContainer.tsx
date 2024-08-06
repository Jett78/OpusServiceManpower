import React from "react";
import Contactus from "../Home/Contactus";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const ContactContainer = () => {
  return (
    <div className="bg-gray-200 pt-0">
     
      <Contactus />

      <div className="mx-auto flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10433.380097085568!2d85.32065640507321!3d27.675237067138614!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19eb1dad6439%3A0xbb1689fdcee3740b!2sLabim%20Mall!5e0!3m2!1sen!2snp!4v1722408798182!5m2!1sen!2snp"
          width="1520"
          height="550"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="rounded-none"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactContainer;
