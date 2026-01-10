import React from "react";

const RegistrationBanner = ({openRegistrationModal}) => {
  return (
    <section className="relative bg-[#378042] text-black py-10 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between overflow-hidden">
      {/* Background Image */}
     
   

      {/* Overlay to darken background slightly */}
      {/* <div className="absolute inset-0 bg-green-700"></div> */}

      {/* Content Section */}
      <div className="relative z-10 text-center md:text-left mb-6 md:mb-0">
        <h2 className="text-xl md:text-2xl font-semibold leading-snug max-w-xl">
          Deen Dayal Jan Awas Yojana Affordable Residential Plots
        </h2>
        <button
         onClick={() => openRegistrationModal()}
         className="mt-4 border bg-green-200 border-black text-black font-semibold px-5 py-2 rounded-md transition-all">
           Registration Open
        </button>
      </div>

      {/* Right Image */}
      <div className="relative z-10 flex justify-center items-center">
        <img
          src="/images/rera-logo.png" // Replace with your logo image
          alt="Affordable Housing"
          className="w-24 h-24 md:w-28 md:h-28 object-contain"
        />
      </div>
    </section>
  );
};

export default RegistrationBanner;
