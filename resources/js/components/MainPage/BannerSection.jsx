import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Button } from "../ui/button";

export default function BannerSection({ openRegistrationModal }) {
  const slideImages = [
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
          ATTENTION REGISTRATION Open !!!! Book Your Plot under Affordable
          Housing Policy 2013 for{" "}
          <strong>AARANYA GREENS, SECTOR 35, SONIPAT</strong> ***  
          33% Quota Reserved for Women ***  
          Haryana Govt. Residential Plots ***

          UNIT ALLOTMENT DATE:
          <span className="bg-yellow-400 text-black px-3 py-1 mx-2 rounded-sm blink-date">
            12 February 2026
          </span>

          LAST DATE OF Registration:
          <span className="bg-red-600 text-white px-3 py-1 mx-2 font-bold blink-date rounded-sm">
            8 February 2026
          </span>

          Registration Amount is Fully Refundable for Unsuccessful Applicants Within 14 Working Days
        </marquee>
      </div>

      <div className="relative w-full" style={{ maxHeight: "70dvh" }}>
        {/* OVERLAY CONTENT */}
        <div className="absolute top-0 left-0 w-full h-full z-50">
          <div className="absolute inset-0 bg-black opacity-60"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl text-center space-y-6 px-4">

              <h2 className="text-white text-3xl md:text-4xl font-bold tracking-wide">
                AARANYA GREENS Residential Plots & Builder Floors Sector 35, Sonipat
              </h2>

              <p className="text-base text-white font-semibold">
                HRERA-PKL-SNP-675-2025 dated on 19-03-2025
              </p>

              <p className="text-green-300 text-xl font-bold tracking-wide">
                REGISTRATION Open
              </p>

              <p className="text-white text-lg font-semibold">
                (HARYANA GOVT. RESIDENTIAL PLOTS)
              </p>

              <p className="text-yellow-400 text-lg font-bold">
                Sonipat’s First 24 Meter Road Plots at This Price
              </p>

              {/* BUTTON + HIGHLIGHT */}
              <div className="flex flex-col items-center gap-4 pt-4">
                <Button
                  onClick={openRegistrationModal}
                  className="rounded-2xl bg-[#53bf4e] text-white"
                >
                  Registration Open
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
              style={{ height: "70dvh" }}
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
