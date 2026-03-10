import React from "react";

const focusPoints = [
  {
    icon: "fa-gem",
    title: "Gold-Standard Plotted Layouts",
    description: "Meticulously engineered layouts with perfectly aligned plots, demarcated with precision for an elite community experience.",
  },
  {
    icon: "fa-crown",
    title: "Elite Road & Infrastructure",
    description: "Wide boulevard roads lined with palm trees, modern drainage, and rapid connectivity to the heart of the capital.",
  },
  {
    icon: "fa-shield-halved",
    title: "Premium Zoning & Safety",
    description: "Strict adherence to government norms combined with secure gated development for ultimate peace of mind.",
  },
  {
    icon: "fa-chart-pie",
    title: "Maximum ROI Appreciation",
    description: "A high-value investment opportunity in Sonipat's fastest-growing corridor, designed for lasting wealth creation.",
  },
];

const DDJAYResidentialSection = () => {
  return (
    <section className="relative bg-white py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2318885b' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block text-xs md:text-sm font-bold text-[#18885b] uppercase tracking-[0.2em] mb-3">
            Elite Government Approved Township
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-4 uppercase">
            Ultra-Luxury Residential Plots – A New Benchmark in Modern Living
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#18885b] to-yellow-500 rounded-full mx-auto"></div>
        </div>

        {/* Introduction Content */}
        <div className="max-w-4xl mx-auto mb-16 px-4">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center mb-6 font-medium">
            Discover a lifestyle of <span className="text-[#18885b] font-bold italic">Cinematic Excellence</span> with our premium plots under the Haryana Government's DDJAY policy.
            We transition the concept of affordable housing into an <span className="text-gray-900 font-bold">Ultra-Realistic 3D vision</span> of luxury and sustainability.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed text-center">
            Designed for those who seek more than just land — Aaranya Greens offers a premium real estate investment vibe, combining modern architectural visualization with the heritage and trust of Flowtech Estates.
          </p>
        </div>

        {/* The Project Focuses On */}
        <div className="mb-12">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 text-center mb-8">
            The Project Focuses On
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusPoints.map((item, index) => (
              <div
                key={index}
                className="group bg-gradient-to-b from-[#f0f9f6] to-white p-6  border border-[#e5f0ec] hover:shadow-lg hover:border-[#18885b]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-[#18885b] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <i className={`fas ${item.icon} text-white text-lg`}></i>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Purpose CTA */}
        <div className="bg-gradient-to-r from-[#18885b] to-[#1a9b66] rounded-2xl p-8 md:p-10 text-center text-white shadow-lg">
          <h3 className="text-lg md:text-xl font-semibold mb-3">
            How We Help You
          </h3>
          <p className="text-sm md:text-base text-white/95 max-w-2xl mx-auto leading-relaxed mb-6">
            This platform is designed to provide project information, eligibility guidance, and enquiry support for interested buyers. Whether you are a first-time buyer or looking to invest, we are here to assist you every step of the way.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <i className="fas fa-info-circle"></i> Project Information
            </span>
            <span className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <i className="fas fa-user-check"></i> Eligibility Guidance
            </span>
            <span className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <i className="fas fa-headset"></i> Enquiry Support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DDJAYResidentialSection;
