import React from "react";

export default function Terms() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
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
            Welcome to www.deendayaljanawasyojanareg.com
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            By accessing, browsing, or registering on this website, you agree to comply with and be bound by the following Terms & Conditions. If you do not agree with any part of these terms, you are advised not to use this website.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This website is intended to provide information and registration facilitation for the project <strong>Aaranya Greens</strong>, registered under <strong>HRERA-PKL-SNP-675-2025</strong> and approved under the Deen Dayal Jan Awas Yojna (DDJAY) of the Government of Haryana.
          </p>
        </div>

        {/* 1. Nature of Website */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 mb-8">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
            1. Nature of Website
          </h2>
          <ul className="space-y-4 list-disc list-inside text-gray-700">
            <li>This website is not an official website of the Government of Haryana, DTCP, or HRERA.</li>
            <li>The use of the name Deen Dayal Jan Awas Yojna (DDJAY) is for informational purposes only, to describe the policy framework under which the project is approved.</li>
            <li>This website acts as a marketing and registration facilitation platform only.</li>
          </ul>
        </div>

        {/* 2. Project Information */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 mb-8">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
            2. Project Information
          </h2>
          <ul className="space-y-4 list-disc list-inside text-gray-700">
            <li>All information, including layouts, amenities, infrastructure, pricing, distances, timelines, and specifications displayed on this website, is indicative in nature.</li>
            <li>Final details shall be governed by statutory approvals, allotment letters, Builder Buyer Agreement (BBA), and documents issued by the developer.</li>
            <li>The developer reserves the right to make changes as per regulatory or technical requirements.</li>
          </ul>
        </div>

        {/* 3. Registration & Allotment */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 mb-8">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
            3. Registration & Allotment
          </h2>
          <ul className="space-y-4 list-disc list-inside text-gray-700">
            <li>Registration on the website does not guarantee allotment of a plot.</li>
            <li>All allotments shall be carried out strictly as per DDJAY policy guidelines, availability, and applicable procedures.</li>
            <li>The registration amount paid is subject to the Refund Policy published on this website.</li>
          </ul>
        </div>

        {/* 4. Payments & Charges */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 mb-8">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
            4. Payments & Charges
          </h2>
          <ul className="space-y-4 list-disc list-inside text-gray-700">
            <li>All payments must be made only through authorized banking channels as mentioned by the developer.</li>
            <li>Pricing, EDC/IDC, PLC, statutory charges, taxes, and registration expenses are applicable as per prevailing government norms.</li>
            <li>Any delay in payment may attract penalties or cancellation as per the terms of allotment or BBA.</li>
          </ul>
        </div>

        {/* 5. Refund & Cancellation */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 mb-8">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
            5. Refund & Cancellation
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Refunds, cancellations, and timelines shall be governed strictly by the Refund Policy published on this website. Once an allotment letter or Builder Buyer Agreement (BBA) is executed, cancellation and refund terms shall be governed by those documents.
          </p>
        </div>

        {/* 6. Home Loan Assistance */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 mb-8">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
            6. Home Loan Assistance
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Home loan assistance, if offered, is subject to bank policies and eligibility criteria. The website, developer, or marketing partner does not guarantee loan approval.
          </p>
        </div>

        {/* 7. RERA Compliance */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 mb-8">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
            7. RERA Compliance
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The project is registered with Haryana RERA under registration number <strong>HRERA-PKL-SNP-675-2025</strong>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Buyers are advised to verify project details on the official HRERA website. All rights and obligations shall be governed by the Real Estate (Regulation and Development) Act, 2016.
          </p>
        </div>

        {/* 8. Intellectual Property */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 mb-8">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
            8. Intellectual Property
          </h2>
          <p className="text-gray-700 leading-relaxed">
            All content on this website, including text, images, logos, graphics, and layout, is the intellectual property of the developer or authorized partners. Unauthorized copying, reproduction, or misuse of content is strictly prohibited.
          </p>
        </div>

        {/* 9. Limitation of Liability */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 mb-8">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
            9. Limitation of Liability
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The developer, website operator, or marketing partner shall not be liable for any direct or indirect loss arising from reliance on information provided on this website. Users are advised to independently verify all details before making any financial commitment.
          </p>
        </div>

        {/* 10. User Responsibilities */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 mb-8">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
            10. User Responsibilities
          </h2>
          <ul className="space-y-4 list-disc list-inside text-gray-700">
            <li>To provide accurate and truthful information during registration</li>
            <li>Not to misuse or attempt to disrupt the website</li>
            <li>Not to make false claims or misuse project information</li>
          </ul>
        </div>

        {/* 11. Modification of Terms */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 mb-8">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
            11. Modification of Terms
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The developer reserves the right to modify, amend, or update these Terms & Conditions at any time without prior notice. Continued use of the website constitutes acceptance of the revised terms.
          </p>
        </div>

        {/* 12. Governing Law & Jurisdiction */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 mb-8">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
            12. Governing Law & Jurisdiction
          </h2>
          <p className="text-gray-700 leading-relaxed">
            These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of courts in Haryana.
          </p>
        </div>

        {/* 13. Contact Information */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 mb-8">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
            13. Contact Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            For any queries related to these Terms & Conditions, users may contact us through the official contact details provided on the website.
          </p>
        </div>

        {/* Footer Note */}
        <div className="text-center text-sm text-gray-500 space-y-2">
          <p className="text-gray-700 font-medium">By proceeding, you agree to the Terms & Conditions, Refund Policy, and Disclaimer.</p>
          <p className="pt-4 border-t">
            © {new Date().getFullYear()} Aaranya Greens. All rights reserved.
          </p>
        </div>
      </section>
    </main>
  );
}

