import React from "react";
import { Link } from "@inertiajs/react";

const objectives = [
  "Share project-related information with clarity and accuracy",
  "Assist customers with enquiries and site visit coordination",
  "Provide clarity on policy-based plotted developments under DDJAY",
];

const approachItems = [
  {
    icon: "fa-info-circle",
    title: "Clear and factual information",
    description: "We present accurate, up-to-date project details without misleading claims or exaggerations.",
  },
  {
    icon: "fa-balance-scale",
    title: "Policy-aligned communication",
    description: "All our communication adheres to DDJAY policy guidelines and regulatory frameworks.",
  },
  {
    icon: "fa-hand-holding-heart",
    title: "Customer-centric assistance",
    description: "We prioritize customer needs through responsive support, transparent processes, and guided assistance.",
  },
  {
    icon: "fa-shield-alt",
    title: "Compliance-focused operations",
    description: "We operate with strict adherence to applicable laws, RERA norms, and ethical business practices.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl md:text-4xl font-bold text-gray-900">
              About Us
            </h1>
            <p className="text-lg text-gray-500 mt-1">
              Learn more about this platform and our approach
            </p>
          </div>
        </div>
      </header>

      {/* Body */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        {/* About This Platform */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-[#18885b] mb-4">
            About This Platform
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This website serves as an informational and enquiry platform for residential plotted developments planned under the{" "}
            <span className="font-semibold text-gray-900">Deen Dayal Jan Awas Yojana (DDJAY)</span> policy of the Haryana Government. We aim to bridge the gap between aspiring homebuyers and DDJAY-compliant projects by providing reliable information and streamlined enquiry support.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our platform is designed to help visitors understand policy-based plotted developments, explore project offerings, and connect with qualified facilitation services—all in one place.
          </p>
        </div>

        {/* Objectives */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Our Objective
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The objective of this platform is to:
          </p>
          <ul className="space-y-3">
            {objectives.map((item, index) => (
              <li key={index} className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-full bg-[#18885b] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                  {index + 1}
                </span>
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Marketing & Facilitation */}
        <div className="bg-gradient-to-r from-[#e7f5f1] to-white border border-[#cce7df] rounded-lg p-6 md:p-8 mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Professional Marketing & Facilitation
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The project is professionally marketed and facilitated by an experienced real estate promotion organization operating in Haryana. We follow ethical marketing practices and transparent communication at every stage—from initial enquiry to site visit and beyond. Our team is committed to providing accurate information and honest guidance to help customers make informed decisions about their property investments.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We work in alignment with DDJAY policy norms, ensuring that all information shared is consistent with applicable regulations and planning guidelines.
          </p>
        </div>

        {/* Our Approach */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
            Our Approach
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachItems.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md hover:border-[#18885b]/40 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-[#18885b] flex items-center justify-center mb-3">
                  <i className={`fas ${item.icon} text-white text-lg`}></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Details - Legal Disclosure */}
        <div className="border-2 border-amber-200 bg-amber-50 rounded-lg p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-amber-900 mb-4 flex items-center gap-2">
            <i className="fas fa-building"></i> Company Details (Legal Disclosure)
          </h2>
          <p className="text-gray-800 font-semibold mb-2">Dee Divine Propinfra Pvt. Ltd.</p>
          <p className="text-gray-700 leading-relaxed mb-4">
            This platform is operated by Dee Divine Propinfra Pvt. Ltd., a private limited company engaged in real estate promotion and customer facilitation services. We act as an authorized channel partner for projects under the Deen Dayal Jan Awas Yojana (DDJAY) policy.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            This is not an official government website. All project details, availability, and allotments are subject to approvals, policy norms, and authority permissions. For verified information, please contact the concerned developer or authority directly.
          </p>
        </div>

        {/* Quick Contact */}
        <div className="mt-10 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Support</h3>
          <p className="text-gray-600 mb-4">Need help? Contact our team for guidance.</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="border border-gray-200 p-4 rounded-lg">
              <p className="text-xs text-gray-500 mb-1">Phone</p>
              <a href="tel:+919311229433" className="font-semibold text-gray-900 hover:text-[#18885b]">+91-9311229433</a>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <p className="text-xs text-gray-500 mb-1">Email</p>
              <a href="mailto:info@deendayaljanawasyojnareg.com" className="font-semibold text-gray-900 hover:text-[#18885b] break-all">info@deendayaljanawasyojnareg.com</a>
            </div>
          </div>
          <div className="mt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#18885b] font-medium hover:underline"
            >
              <i className="fas fa-arrow-left"></i> Return to Homepage
            </Link>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Dee Divine Propinfra Pvt. Ltd. All rights reserved.
        </div>
      </section>
    </main>
  );
}
