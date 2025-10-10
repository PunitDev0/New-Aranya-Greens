import React from 'react';

const RefundPolicy = () => {
  return (
    <section className="py-10 bg-white text-black h-screen">
      <div className="container mx-auto w-4/5 text-justify">
        <div className="flex flex-col">
          <div>
            <h2 className="text-center text-4xl font-sans font-bold mb-6">
              Cancellation & Refund Policy
            </h2>

            <p className="text-base font-light leading-6 mb-4">
              <strong>
                YP Infra Pvt. Ltd. believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:
                <br />
                All unsuccessful applications will be refunded registration amount within 7 Working Days of the Allotment Date
                <br />
                Refunds will be processed on the same account that which user has provided us.
                <br />
                There is 100% Refund policy with no charges if Allotment is not confirmed.
                <br />
                Please contact info@deendayaljanawasyojnareg.com for Cancellation and More information.
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;