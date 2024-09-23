import React from 'react'
import {Icon} from"@iconify/react"
const Applyform = ({closeDropdown}:any) => {
  return (
    <main className="bg-white rounded-2xl  md:p-10 p-6 absolute left-1/2 -translate-x-1/2 top-1/2  -translate-y-1/2  lg:w-[50em]  mx-auto">
        {/* <img src="./public/cancelbtn.svg" alt="cancel-btn" className="absolute md:right-6 right-2 md:top-6 top-2 cursor-pointer md:w-8 w-4" onClick={closeDropdown} /> */}
        <div className="absolute md:right-6 right-2 md:top-4 top-2 cursor-pointer text-2xl" onClick={closeDropdown} >
        <Icon icon="material-symbols:cancel"  style={{color: "red"}} />
        </div>
      <div>
        <p className=" lg:text-[1vw] xl:text-xl text-md font-bold   text-center w-[90%] mx-auto">
         Apply Now
        </p>
        {/* <h3 className="font-medium lg:text-[1.2vw] xl:text-xl text-xs text-center md:py-4 py-2 ">
          Contact us today to access top talent for your business needs.
        </h3> */}

        {/* <div className="sm:w-[25em] bg-[#2088CA] mx-auto h-[1.2px]"> </div> */}
      </div>

      
      <form action="" className="col-span-3  md:py-4 py-2 md:mt-5  gap-x-14">
           <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">

           <div className="flex flex-col md:gap-2 sm:w-full w-60 mx-auto">
          <label
            htmlFor="firstName"
            className="font-medium text-[0.6em] sm:text-[1.5vw] lg:text-[0.8vw] text-tertiary-600 "
          >
            First Name <span className="text-blue-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            placeholder="Your First Name"
            name="firstName"
            className="p-2 lg:py-[0.8vw] text-sm border-2 rounded-xl border-zinc-200 outline-none bg-transparent"
            required
          />
        </div>

        <div className="flex flex-col md:gap-2 sm:w-full w-60 mx-auto">
          <label
            htmlFor="lastName"
            className="font-medium text-[0.6em] sm:text-[1.5vw] lg:text-[0.8vw] text-tertiary-600"
          >
            Last Name <span className="text-blue-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Your Last Name"
            name="lastName"
            className="p-2 py-2 text-sm lg:py-[0.8vw]  border-2 rounded-xl border-zinc-200 outline-none bg-transparent"
            required
          />
        </div>

        <div className="flex flex-col md:gap-2  sm:w-full w-60 mx-auto">
          <label
            htmlFor="email"
            className="font-medium text-[0.6em] sm:text-[1.5vw] lg:text-[0.8vw] text-tertiary-600"
          >
            Email <span className="text-blue-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="p-2 py-2 text-sm  lg:py-[0.8vw]  border-2 rounded-xl border-zinc-200 outline-none bg-transparent"
            required
          />
        </div>

        <div className="flex flex-col md:gap-2  sm:w-full w-60 mx-auto">
          <label
            htmlFor="phone"
            className="font-medium text-[0.6em] sm:text-[1.5vw] lg:text-[0.8vw] text-tertiary-600"
          >
            Phone <span className="text-blue-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your Phone Number"
            className="p-2 py-2 text-sm lg:py-[0.8vw]  border-2 rounded-xl border-zinc-200 outline-none bg-transparent"
            required
          />
        </div>
           </div>

        <div className="col-span-2 mt-2 flex flex-col md:gap-2 sm:w-full w-60 mx-auto h-auto" data-lenis-pevent>
          <label
            htmlFor="message"
            className="font-medium  text-tertiary-600 text-[0.6em] sm:text-[1.5vw] lg:text-[0.8vw]"
          >
            Message <span className="text-blue-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows={4}
            className="p-2 py-2 text-sm  overflow-auto resize-none lg:py-[0.8vw]  border-2 rounded-xl border-zinc-200 outline-none bg-transparent"
            required
          />
        </div>

        <div className="flex justify-start mt-4">
          <button className="md:px-[2vw] md:py-[0.5vw] px-3 py-2 text-[3vw] lg:text-md text-xs font-semibold bg-[#2088ca] hover:bg-[#2563eb] duration-300 rounded-full text-zinc-50  border-zinc-600 ">
            Submit
          </button>
        </div>
      </form>
    </main>
  )
}

export default Applyform