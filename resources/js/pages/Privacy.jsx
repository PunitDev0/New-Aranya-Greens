import React from "react";
import { Link } from "@inertiajs/react";

const infoCollected = [
  "Name, phone number, and email address",
  "Details submitted through enquiry forms",
  "Communication details via call or WhatsApp",
];

const useOfInfo = [
  "Responding to enquiries",
  "Sharing project-related details",
  "Coordinating site visits and follow-ups",
];

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-500 mt-1">
              How we collect and protect your information
            </p>
          </div>
        </div>
      </header>

      {/* Body */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        {/* Introduction */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-[#18885b] mb-4">
            Privacy Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This Privacy Policy describes how personal information is collected and used by this website, operated by <span className="font-semibold text-gray-900">Dee Divine Propinfra Pvt. Ltd.</span> (“the Company”).
          </p>
        </div>

        {/* Information Collection */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 mb-8">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
            Information Collection
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may collect the following information:
          </p>
          <ul className="space-y-2 list-disc list-inside text-gray-700">
            {infoCollected.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Use of Information */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 mb-8">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
            Use of Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Collected information is used for:
          </p>
          <ul className="space-y-2 list-disc list-inside text-gray-700">
            {useOfInfo.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Data Protection */}
        <div className="bg-gradient-to-r from-[#e7f5f1] to-white border border-[#cce7df] rounded-lg p-6 md:p-8 mb-8">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
            Data Protection
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Company does not sell, rent, or share personal information with third parties or any government authority. Data is used strictly for communication related to the services offered on this platform.
          </p>
          <p className="text-gray-700 leading-relaxed font-medium">
            By submitting your details, you consent to being contacted by the Company through call, SMS, or WhatsApp.
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
