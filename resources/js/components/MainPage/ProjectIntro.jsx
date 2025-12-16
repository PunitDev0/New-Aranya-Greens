import React from "react";

const ProjectIntro = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#e7f5f1] to-white py-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto text-center md:text-left">

        {/* Title */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#18885b] mb-3 tracking-wide leading-snug text-center md:text-left">
          Aaranya Greens – Residential Plots & Builder Floors, Sector 35, Sonipat
        </h2>

        {/* Content */}
        <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-4">
          <span className="font-semibold text-[#18885b]">
            Flowtech Estates Private Limited
          </span>{" "}
          proudly marks its debut in Sonipat with{" "}
          <span className="font-semibold">Aaranya Greens</span> — a meticulously
          planned plotted residential enclave that blends thoughtful design with
          long-term value. Nestled in the land of our origins, this landmark
          development reflects a vision rooted in trust, quality, and future
          growth.
        </p>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-4">
          Aaranya Greens features precisely demarcated residential plots,
          elegant builder floors, curated green landscaping, and robust
          infrastructure — all thoughtfully crafted to deliver everyday comfort,
          seamless connectivity, and a refined standard of living. Wide paved
          roads, abundant open spaces, and planned green zones ensure a balanced
          urban lifestyle.
        </p>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-4">
          Going far beyond brochure promises, the project offers dependable water
          supply, well-engineered drainage, modern sewage systems, and reliable
          civic infrastructure — ensuring peace of mind for residents and
          long-term value for investors.
        </p>

        <p className="text-sm md:text-base text-gray-700 leading-relaxed mt-4">
          Developed under the{" "}
          <span className="font-semibold text-[#18885b]">
            Deen Dayal Jan Awas Yojna (DDJAY)
          </span>
          , Aaranya Greens offers freehold plots, interest subsidies, and
          affordable financing options for aspiring homeowners. For developers,
          individual plot registries and floor-wise loan approvals make it an
          ideal opportunity — making this not just a place to live, but a place
          to grow, both personally and financially.
        </p>

        {/* Accent Line */}
        <div className="w-20 h-1 bg-[#18885b] mt-6 mx-auto md:mx-0 rounded-full"></div>
      </div>
    </section>
  );
};

export default ProjectIntro;
