import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Button } from "../ui/button";

export default function BannerSection({ openRegistrationModal }) {
  const slideImages = [
    // "/images/premium_township_aerial.png",
    "/images/aranyabanner.jpeg",
    "/images/aranyabanner1.jpeg",
    "/images/aranyabanner2.jpeg",
  ];

  return (
    <>
      {/* NEWS TICKER */}
      <div className="news-tricker">
        <marquee
          width="100%"
          direction="left"
          className="text-[17px] font-semibold"
        >
          ATTENTION: EXCLUSIVE MANAGEMENT QUOTA REGISTRATION OPEN !!!! Book your premium plot at{" "}
          <strong>AARANYA GREENS, SECTOR 35, SONIPAT</strong> ***
          Only 8 Exclusive Plots Available ***
          Starting at ₹1.31 Cr* ***

          UNIT ALLOTMENT DATE:
          <span className="bg-yellow-400 text-black px-3 py-1 mx-2 blink-date">
            3 April 2026
          </span>

          LAST DATE OF Registration:
          <span className="bg-red-600 text-white px-3 py-1 mx-2 font-bold blink-date">
            30 March 2026
          </span>

          Registration Amount is Fully Refundable for Unsuccessful Applicants Within 14 Working Days
        </marquee>
      </div>

      <div className="relative w-full h-[60dvh] md:h-[70dvh]">
        {/* OVERLAY CONTENT */}
        <div className="absolute top-0 left-0 w-full h-full z-50">
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="max-w-4xl text-center space-y-3 md:space-y-4">

              <h2 className="text-white text-xl sm:text-2xl md:text-5xl font-extrabold tracking-wide uppercase leading-tight">
                DEEN DAYAL JAN AWAS YOJNA PLOTS
              </h2>

              <p className="text-xs sm:text-base text-white font-semibold uppercase tracking-widest px-2">
                Premium Residential Plots | Sector 35, Sonipat
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 my-2 sm:my-4">
                <div className="w-full sm:w-auto bg-yellow-400 text-black px-4 sm:px-6 py-2 font-bold text-sm sm:text-xl uppercase">
                  Only Under Management Quota
                </div>
                <div className="w-full sm:w-auto bg-white text-black px-4 sm:px-6 py-2 font-bold text-sm sm:text-xl uppercase">
                  Starting at ₹1.31 Cr*
                </div>
              </div>

              <p className="text-red-400 text-lg sm:text-2xl font-black tracking-widest animate-pulse">
                REGISTRATION OPEN
              </p>

              <p className="text-white text-[10px] sm:text-lg font-semibold uppercase">
                (Haryana Govt. Approved Residential Township)
              </p>

              <div className="flex flex-col items-center gap-4 pt-2 md:pt-4">
                <Button
                  onClick={openRegistrationModal}
                  className="rounded-none bg-[#378042] text-white hover:bg-green-700 font-bold px-6 sm:px-10 py-4 sm:py-6 text-base sm:text-xl tracking-widest shadow-none border-2 border-white/20"
                >
                  REGISTER NOW
                </Button>
              </div>

            </div>
          </div>
        </div>

        {/* SWIPER */}
        <Swiper
          className="mySwiper w-full h-full"
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          {slideImages.map((src, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center bg-gray-100"
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
