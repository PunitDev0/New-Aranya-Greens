import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
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
          <p className="text-gray-700 leading-relaxed mb-4">
            This Privacy Policy describes how <a href="https://www.deendayaljanawasyojanareg.com" className="text-blue-600 hover:underline">www.deendayaljanawasyojanareg.com</a> collects, uses, protects, and handles personal information of users who visit or register on this website.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By using this website, you consent to the practices described in this Privacy Policy.
          </p>
        </div>

        {/* 1. Information We Collect */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 mb-8">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
            1. Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may collect the following personal information when you register or interact with the website:
          </p>
          <ul className="space-y-2 list-disc list-inside text-gray-700">
            <li>Full name</li>
            <li>Mobile number</li>
            <li>Email address</li>
            <li>City/location</li>
            <li>Payment and transaction details (via secure payment gateways)</li>
            <li>Any other information voluntarily provided by the user</li>
          </ul>
        </div>

        {/* 2. Use of Information */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 mb-8">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
            2. Use of Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The information collected is used for the following purposes:
          </p>
          <ul className="space-y-2 list-disc list-inside text-gray-700">
            <li>To process registrations and allotment-related communication</li>
            <li>To provide information about the project Aaranya Greens</li>
            <li>To contact users regarding updates, offers, or documentation</li>
            <li>To comply with legal, regulatory, and RERA requirements</li>
            <li>To improve website functionality and user experience</li>
          </ul>
          <p className="mt-4 text-gray-700 font-medium">
            We do not sell, rent, or trade user data to third parties.
          </p>
        </div>

        {/* 3. Data Protection & Security */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 mb-8">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
            3. Data Protection & Security
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We implement reasonable security practices to protect personal data from unauthorized access, misuse, or disclosure. However, no method of transmission over the internet is 100% secure, and users share information at their own risk.
          </p>
        </div>

        {/* 4. Third-Party Disclosure */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 mb-8">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
            4. Third-Party Disclosure
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            User information may be shared only with:
          </p>
          <ul className="space-y-2 list-disc list-inside text-gray-700">
            <li>Authorized developer representatives</li>
            <li>Banking or financial institutions (for loan assistance, if opted)</li>
            <li>Government or regulatory authorities when required by law</li>
          </ul>
          <p className="mt-4 text-gray-700">
            No data is shared for unrelated marketing purposes.
          </p>
        </div>

        {/* 5. RERA & DDJAY Compliance */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 mb-8">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
            5. RERA & DDJAY Compliance
          </h2>
          <p className="text-gray-700 leading-relaxed">
            All data handling complies with applicable laws, including the Real Estate (Regulation and Development) Act, 2016 (RERA) and DDJAY policy guidelines.
          </p>
        </div>

        {/* 6. User Rights */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 mb-8">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
            6. User Rights
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Users may request access, correction, or deletion of their personal data by contacting us through the official contact details mentioned on the website, subject to regulatory and legal requirements.
          </p>
        </div>

        {/* 7. Changes to Privacy Policy */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 mb-8">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
            7. Changes to Privacy Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This Privacy Policy may be updated from time to time. Any changes will be posted on this page and will be effective immediately upon publication.
          </p>
        </div>

        {/* 8. Contact Information */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 mb-8">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
            8. Contact Information
          </h2>
          <p className="text-gray-700 leading-relaxed">
            For privacy-related concerns, users may contact us using the official communication channels provided on the website.
          </p>
        </div>

        {/* Cookie Policy Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-[#18885b] mb-4">
            Cookie Policy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            This website uses cookies to enhance user experience and ensure smooth functioning.
          </p>

          <h3 className="text-lg font-bold text-gray-900 mb-2">What Are Cookies?</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Cookies are small text files stored on your device when you visit a website. They help the website recognize your device and remember preferences.
          </p>

          <h3 className="text-lg font-bold text-gray-900 mb-2">How We Use Cookies</h3>
          <p className="text-gray-700 leading-relaxed mb-4">We use cookies to:</p>
          <ul className="space-y-2 list-disc list-inside text-gray-700 mb-6">
            <li>Improve website performance and speed</li>
            <li>Analyze visitor traffic and usage patterns</li>
            <li>Enhance user experience and navigation</li>
            <li>Support marketing and advertising campaigns (Google Ads, Meta Ads, etc.)</li>
          </ul>

          <h3 className="text-lg font-bold text-gray-900 mb-2">Third-Party Cookies</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Some cookies may be placed by third-party services such as analytics tools or advertising platforms. These cookies are governed by the respective third-party privacy policies.
          </p>

          <h3 className="text-lg font-bold text-gray-900 mb-2">Managing Cookies</h3>
          <p className="text-gray-700 leading-relaxed">
            Users can choose to disable cookies through their browser settings. Disabling cookies may affect certain functionalities of the website.
          </p>
        </div>

        {/* Footer Note */}
        <div className="text-center text-sm text-gray-500 space-y-2">
          <p className="text-gray-700 font-medium">Your privacy is important to us. We collect information only to serve you better.</p>
          <p>By continuing to use this website, you agree to our use of cookies.</p>
          <p className="mt-4 pt-4 border-t">
            © {new Date().getFullYear()} Aaranya Greens. All rights reserved.
          </p>
        </div>
      </section>
    </main>
  );
}

