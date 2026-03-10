import React from "react";

export default function ProjectIntro() {
  return (
    <section className="relative bg-gradient-to-b from-[#e7f5f1] to-white py-12 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* IMAGE SIDE */}
        <div className="w-full lg:w-1/2 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-green-600 blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-white overflow-hidden shadow-2xl">
            <img
              src="/images/gal1.jpeg"
              alt="Aaranya Greens Living"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white px-4 py-2 text-sm border border-white/20">
              <span className="font-bold text-yellow-400">DEVELOPMENT STATUS:</span> Professional Surveying & Land Demarcation in Progress
            </div>
          </div>
        </div>

        {/* CONTENT SIDE */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="inline-block px-4 py-1.5 bg-[#18885b]/10 text-[#18885b] text-xs font-bold tracking-widest uppercase mb-2">
            The Future of Premium Living
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#18885b] tracking-tight leading-tight">
            Aaranya Greens: <span className="text-gray-900">Setting the Gold Standard in Sonipat</span>
          </h2>

          <div className="h-1.5 w-24 bg-gradient-to-r from-[#18885b] to-yellow-400"></div>

          <p className="text-lg text-gray-800 font-medium leading-relaxed">
            Flowtech Estates marks its flagship debut with an plotted township designed for the elite.
            Aaranya Greens isn't just a project; it's a cinematic lifestyle statement in Sector 35, Sonipat.
          </p>

          <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
            <p>
              Our professional team of Indian land surveyors is currently on-site, using state-of-the-art tripod surveying equipment and modern engineering to ensure <span className="text-gray-900 font-semibold">perfectly aligned plots with ultra-precise boundaries</span>.
              This meticulous attention to detail defines our commitment to providing a premium real estate investment opportunity with high ROI potential.
            </p>

            <p>
              Under the Government's <span className="text-[#18885b] font-bold">DDJAY Policy</span>, we are creating a masterpiece featuring wide palm-lined boulevard roads, curated luxury landscaping, and robust civic infrastructure that goes far beyond traditional standards.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 bg-green-100 flex items-center justify-center mt-1">
                <i className="fas fa-check text-[#18885b] text-[10px]"></i>
              </div>
              <p className="text-xs font-bold text-gray-700">Ultra-Realistic Urban Planning</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 bg-green-100 flex items-center justify-center mt-1">
                <i className="fas fa-check text-[#18885b] text-[10px]"></i>
              </div>
              <p className="text-xs font-bold text-gray-700">High Appreciation Vibe</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 bg-green-100 flex items-center justify-center mt-1">
                <i className="fas fa-check text-[#18885b] text-[10px]"></i>
              </div>
              <p className="text-xs font-bold text-gray-700">Modern Professional Eqpt</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 bg-green-100 flex items-center justify-center mt-1">
                <i className="fas fa-check text-[#18885b] text-[10px]"></i>
              </div>
              <p className="text-xs font-bold text-gray-700">8K Quality Infrastructure</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
