import React from 'react';

const RefundPolicy = () => {
  return (
    <section className="py-10 bg-white text-black min-h-screen">
      <div className="container mx-auto w-4/5 text-justify">
        <div className="flex flex-col">
          <div>
            <h2 className="text-center text-4xl font-sans font-bold mb-6">
              Cancellation & Refund Policy
            </h2>

            <p className="text-base font-light leading-7 mb-4">
              <strong>
              Flowtech Estates Private Limited believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:
              </strong>
            </p>

            <ul className="list-disc list-inside text-base font-light leading-7 mb-4">
              <li>
                All unsuccessful applications will be refunded registration amount within <strong>14 Working Days</strong> of the Allotment Date.
              </li>
              <li>
                Refunds will be processed on the same account that the user has provided us.
              </li>
              <li>
                There is a <strong>100% Refund policy</strong> with no charges if Allotment is not confirmed.
              </li>
            </ul>

            <p className="text-base font-light leading-7">
              For Cancellation and more information, please contact{' '}
              <a
                href="mailto:info@deendayaljanawasyojnareg.com"
                className="text-blue-600 hover:underline"
              >
                info@deendayaljanawasyojnareg.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;
