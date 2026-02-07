import React from "react";

const reasons = [
  {
    icon: "fa-file-contract",
    text: "Policy-based plotted development",
  },
  {
    icon: "fa-home",
    text: "Designed for residential end-use",
  },
  {
    icon: "fa-balance-scale",
    text: "Regulated planning framework",
  },
  {
    icon: "fa-hand-holding-usd",
    text: "Suitable for long-term living and investment",
  },
];

const WhyConsiderDDJAY = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#e7f5f1] to-white">
      <div className="max-w-4xl mx-auto">
        {/* Why Consider Heading */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 text-center mb-8">
          Why Consider Plots Under DDJAY?
        </h2>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-[#e5f0ec] hover:shadow-md hover:border-[#18885b]/40 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-[#18885b] flex items-center justify-center shrink-0">
                <i className={`fas ${item.icon} text-white`}></i>
              </div>
              <p className="text-gray-700 font-medium">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Important Note */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg">
          <h3 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
            <i className="fas fa-exclamation-circle"></i> Important Note
          </h3>
          <p className="text-sm text-amber-900/90 leading-relaxed">
            All project details, availability, and allotments are subject to approvals, policy norms, and authority permissions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyConsiderDDJAY;
