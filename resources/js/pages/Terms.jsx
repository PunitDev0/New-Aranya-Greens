import React from "react";
import { Link } from "@inertiajs/react";

const termsItems = [
  "All information provided on this website is indicative and subject to change without notice.",
  "Project details, pricing, layouts, and availability are subject to policy guidelines and authority approvals.",
  "Images, maps, and plans are for representational purposes only.",
  "The operating company provides marketing and facilitation services only.",
  "Final allotment and eligibility shall be governed by applicable rules and regulations.",
  "Any disputes shall be subject to the jurisdiction of competent courts in Haryana.",
];

export default function Terms() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <Link
              href="/"
              className="text-sm text-[#18885b] hover:underline mb-2 inline-block"
            >
              ← Back to Home
            </Link>
            <h1 className="text-xl md:text-4xl font-bold text-gray-900">
              Terms & Conditions
            </h1>
            <p className="text-lg text-gray-500 mt-1">
              Please read these terms before using this website
            </p>
          </div>
        </div>
      </header>

      {/* Body */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        {/* Introduction */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-[#18885b] mb-4">
            Terms & Conditions
          </h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing and using this website, you agree to be bound by the following terms and conditions. Please read them carefully.
          </p>
        </div>

        {/* Terms List */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 mb-8">
          <ul className="space-y-4">
            {termsItems.map((item, index) => (
              <li key={index} className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-full bg-[#18885b] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Jurisdiction Note */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg mb-8">
          <p className="text-sm text-amber-900/90 leading-relaxed">
            For any disputes arising from the use of this website or services, the competent courts in <strong>Haryana</strong> shall have exclusive jurisdiction.
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
