export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Top Info Bar */}


      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Brand */}
          <div>
            <h1 className="text-xl md:text-5xl font-bold text-gray-900">
              Disclaimer
            </h1>
            <p className="text-xl text-gray-500 mt-1">
              Important information about our website and services
            </p>
          </div>

        </div>
      </header>

      {/* Body */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        {/* Highlight Box */}
        <div className="border border-green-200 bg-green-50 p-6">
          <h2 className="text-lg md:text-xl font-bold text-green-900">
            Official Website Disclaimer (Important)
          </h2>
          <p className="text-sm md:text-base text-green-900/90 mt-2 leading-relaxed">
            <span className="font-semibold">deedivinepropinfra.com</span> is a
            privately owned and operated real estate consultancy platform managed
            by <span className="font-semibold">Dee Divine Propinfra Pvt. Ltd.</span>
            We work as an <span className="font-semibold">authorized channel partner</span>{" "}
            for multiple projects under the{" "}
            <span className="font-semibold">Deen Dayal Jan Awas Yojana (DDJAY)</span>.
            <br />
            <span className="font-bold">
              We are NOT a government website, NOT a government entity, and NOT
              affiliated with any government department.
            </span>
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          {/* Left Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Section 1 */}
            <div className="bg-white border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900">
                1) Information Purpose
              </h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                All information shown on this website including project details,
                brochures, price lists, layouts, and registration updates is
                provided for{" "}
                <span className="font-semibold">
                  general information and consultancy guidance
                </span>{" "}
                only. This content should not be considered a legal or government
                confirmation.
              </p>
            </div>

            {/* Section 2 */}
            <div className="bg-white border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900">
                2) Verification & Accuracy
              </h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                Users are advised to verify all project approvals, RERA details,
                eligibility criteria, pricing, payment plans, allotment process,
                and other documentation from official sources or the concerned
                developer authority before proceeding.
              </p>

              <div className="mt-4 border border-yellow-200 bg-yellow-50 p-4">
                <p className="text-sm text-yellow-900">
                  ⚠️ <span className="font-bold">Note:</span> Any reliance you place
                  on the information provided on this website is strictly at your
                  own risk.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-white border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900">
                3) No Government Association
              </h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                We do not claim to represent any government organization. Names,
                logos, schemes, and references are used only for informational
                purposes related to the projects under DDJAY.
              </p>
            </div>

            {/* Section 4 */}
            <div className="bg-white border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900">
                4) Third-Party Links & Documents
              </h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                This website may contain links to external websites or documents
                (such as brochures and approvals). We are not responsible for the
                content, authenticity, or availability of those third-party
                resources.
              </p>
            </div>

            {/* Section 5 */}
            <div className="bg-white border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900">
                5) Updates & Changes
              </h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                Dee Divine Propinfra Pvt. Ltd. reserves the right to update,
                modify, or remove any part of this disclaimer or website content
                without prior notice.
              </p>
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="space-y-6">
            {/* Quick Contact */}
            <div className="bg-white border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900">Quick Support</h3>
              <p className="text-sm text-gray-600 mt-2">
                Need help? Contact our team for guidance.
              </p>

              <div className="mt-4 space-y-3">
                <div className="border border-gray-200 p-3">
                  <p className="text-xs text-gray-500">Phone</p>
                  <p className="font-semibold text-gray-900">+91-9311229433</p>
                </div>

                <div className="border border-gray-200 p-3">
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="font-semibold text-gray-900">
                    info@deendayaljanawasyojnareg.com
                  </p>
                </div>
              </div>


            </div>


          </aside>
        </div>

        {/* Footer Note */}
        <div className="mt-10 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Dee Divine Propinfra Pvt. Ltd. All rights
          reserved.
        </div>
      </section>
    </main>
  )
}
