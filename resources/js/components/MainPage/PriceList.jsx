import React from "react";

export default function PriceList() {
  return (
    <section className="amenities-pricing mt-20" id="amenities-pricing">
      <h2 className="cons-heading pb-2 text-center font-sans">
        Aaranya Greens Price List
      </h2>

      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="amenities-listing table-responsive">

              <h4 className="text-center mb-3">
                (DEEN DAYAL JAN AWAS YOJNA PLOTS)
              </h4>

              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th>UNIT SIZE (Sq.yd)</th>
                    <th>UNIT PRICE (in Rs. Per Sq.yd.)</th>
                    <th>Registration Amount</th>
                    <th>10% at the time of Booking</th>
                    <th>
                      40% within 20 days of Allotment / BBA Execution +
                      includes 50% EDC/IDC
                    </th>
                    <th>
                      25% within 60 days of Allotment + includes 25% EDC/IDC
                    </th>
                    <th>
                      25% Offer of Possession + include 25% EDC/IDC
                    </th>
                    <th>Total Cost*</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>138.05</td>
                    <td>₹92,500</td>
                    <td>₹31,000</td>
                    <td>₹12,45,963</td>
                    <td>₹53,01,120</td>
                    <td>₹32,89,041</td>
                    <td>₹32,89,041</td>
                    <td>₹1,31,56,165</td>
                  </tr>

                  <tr>
                    <td>150.69</td>
                    <td>₹92,500</td>
                    <td>₹31,000</td>
                    <td>₹13,62,883</td>
                    <td>₹57,86,496</td>
                    <td>₹35,90,189</td>
                    <td>₹35,90,189</td>
                    <td>₹1,43,60,757</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
