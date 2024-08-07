import Link from "next/link";
import Image from "next/image";
import React from "react";

const Cta = () => {
  return (
    <main className="w-11/12 mx-auto my-20">
      {/* <div className="border bg-[url('/CTA.png')] shadow-md bg-black bg-opacity-50 bg-blend-overlay text-white bg-center rounded-2xl flex flex-col justify-center items-center px-6 w-full h-[30em]">
         <div className="grid md:gap-6">
         <h2 className="lg:text-[46px] md:text-[40px] sm:text-[30px] text-xl font-bold text-center">
          Boost Your Productivity
        </h2>
        <h2 className="lg:text-[46px] md:text-[40px] sm:text-[30px] text-xl font-bold text-center">
        with Our Manpower Solutions        </h2>
         </div>
        <p className="text-center font-medium text-sm text-gray-200 tracking-wider max-w-[42em] mx-auto md:py-8 py-4">
          Enhance your efficiency with our tailored manpower services. From
          temporary to long-term staffing, we’ve got the talent you need.
          Contact us today!
        </p>
       


       <div className="flex flex-wrap items-center justify-center sm:gap-6">
       <Link  href="https://wa.me/1234567890">
         <button className="px-6 py-3 border mx-auto rounded-full text-green-600  bg-white hover:bg-gray-300 font-bold flex items-center gap-2 border-green-600">
            <Image src="/whatsappicon.png" alt="whatsapp-icon" width={10000} height={1000} className="w-6" />
            <span>Whatsapp Now</span>
          </button>
         </Link>
         <Link href="/Contact">
              <button className=" w-[140px] border-white border font-bold h-[45px] my-3 flex items-center justify-center rounded-full cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#CC1587] before:via-[#26538C] before:to-[#00AFF0] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
                Contact Us
              </button>
            </Link>
       </div>
      </div> */}



<section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
       Boost Your Productivity With Our Manpower Solutions
      </h2>

      <p className="hidden text-gray-500 md:mt-4 md:block">
      Enhance your efficiency with our tailored manpower services. From temporary to long-term staffing, we’ve got the talent you need. Contact us today! enim et fermentum, augue. Aliquet amet volutpat
        quisque ut interdum tincidunt duis.
      </p>

       <div className="flex flex-wrap items-center justify-center sm:gap-6">
       <Link  href="https://wa.me/1234567890">
         <button className="px-6 py-3 border mx-auto rounded-full text-green-600  bg-white hover:bg-green-200 font-bold flex items-center gap-2 border-green-600">
            <Image src="/whatsappicon.png" alt="whatsapp-icon" width={10000} height={1000} className="w-6" />
            <span>Whatsapp Now</span>
          </button>
         </Link>
         <Link href="/Contact">
              <button className=" w-[140px] border-white bg-tertiary border font-bold h-[45px] my-3 flex items-center justify-center rounded-full cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#CC1587] before:via-[#26538C] before:to-[#00AFF0] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
                Contact Us
              </button>
            </Link>
       </div>
    </div>
  </div>

  <img
    alt=""
    src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    className="h-56 w-full object-cover sm:h-full"
  />
</section>
    </main>
  );
};

export default Cta;
