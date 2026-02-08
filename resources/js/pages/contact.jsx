import React from "react";
import { Link } from "@inertiajs/react";

const contactItems = [
  {
    icon: "fa-building",
    label: "Company Name",
    value: "Dee Divine Propinfra Pvt. Ltd.",
  },
  {
    icon: "fa-map-marker-alt",
    label: "Office Address",
    value: "Registered Office Address", // Update in contact.jsx when available
    link: null,
  },
  {
    icon: "fa-phone-alt",
    label: "Phone",
    value: "+91-9211494111",
    link: "tel:+919211494111",
  },
  {
    icon: "fa-envelope",
    label: "Email",
    value: "info@deendayaljanawasyojnareg.com",
    link: "mailto:info@deendayaljanawasyojnareg.com",
  },
  {
    icon: "fa-clock",
    label: "Working Hours",
    value: "Monday to Saturday | 10:00 AM – 6:30 PM",
    link: null,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl md:text-4xl font-bold text-gray-900">
              Contact Us
            </h1>
            <p className="text-lg text-gray-500 mt-1">
              Get in touch for project enquiries and site visits
            </p>
          </div>
        </div>
      </header>

      {/* Body */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        {/* Contact Information Intro */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-[#18885b] mb-4">
            Contact Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            For project enquiries, site visits, and general information regarding our DDJAY residential plotted developments, please use the details below. Our team is available to assist you with registration guidance, eligibility queries, and site visit coordination.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            All enquiries submitted through this website are handled by the operating company.
          </p>
        </div>

        {/* Contact Details Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {contactItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md hover:border-[#18885b]/40 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#18885b] flex items-center justify-center shrink-0">
                  <i className={`fas ${item.icon} text-white text-lg`}></i>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-gray-900 font-medium hover:text-[#18885b] break-all"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-900 font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Action Buttons */}
        <div className="bg-gradient-to-r from-[#e7f5f1] to-white border border-[#cce7df] rounded-lg p-6 md:p-8 mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+919211494111"
              className="inline-flex items-center gap-2 bg-[#18885b] text-white px-5 py-3 rounded-lg font-medium hover:bg-[#157a4d] transition-colors"
            >
              <i className="fas fa-phone-alt"></i> Call Now
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=+919211494111&text=Hello,%20I%20am%20interested%20in%20DDJAY%20Plots%20,%20Please%20get%20in%20touch%E2%80%A6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-lg font-medium hover:bg-[#20bd5a] transition-colors"
            >
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-gray-700 text-white px-5 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              <i className="fas fa-edit"></i> Enquire Now
            </Link>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Use the enquiry form on our homepage for detailed project information and registration support.
          </p>
        </div>

        {/* Footer Note */}
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Dee Divine Propinfra Pvt. Ltd. All rights reserved.
        </div>
      </section>
    </main>
  );
}
