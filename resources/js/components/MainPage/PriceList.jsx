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

              {/* ===== FIRST TABLE ===== */}
              <h4 className="text-center mb-3">
                (DEEN DAYAL JAN AWAS YOJNA PLOTS)
              </h4>

              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th>UNIT SIZE (Sq.yd)</th>
                    <th>UNIT PRICE (in Rs. Per Sq.yd.)</th>
                    <th>Registration Amount</th>
                    <th>10% On Allotment</th>
                    <th>
                      40% within 30 days of Allotment + Execution of BBA +
                      include 50% EDC/IDC
                    </th>
                    <th>
                      25% within 90 days of Allotment + include 25% EDC/IDC
                    </th>
                    <th>
                      25% Offer of Possession + include 25% EDC/IDC
                    </th>
                    <th>Total Cost*</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>128.98</td>
                    <td>₹1,10,000</td>
                    <td>₹31,000</td>
                    <td>₹13,87,780</td>
                    <td>₹58,55,692</td>
                    <td>₹36,37,236</td>
                    <td>₹36,37,236</td>
                    <td>₹1,45,48,944</td>
                  </tr>

                  <tr>
                    <td>129.80</td>
                    <td>₹1,10,000</td>
                    <td>₹31,000</td>
                    <td>₹13,96,800</td>
                    <td>₹58,92,920</td>
                    <td>₹36,60,360</td>
                    <td>₹36,60,360</td>
                    <td>₹1,46,41,440</td>
                  </tr>
                </tbody>
              </table>

              {/* ===== SECOND TABLE ===== */}
              {/* <h4 className="text-center mt-5 mb-3">
                On 24 Meter Wide Road
              </h4>

              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th>UNIT SIZE (Sq.yd)</th>
                    <th>UNIT PRICE (in Rs. Per Sq.yd.)</th>
                    <th>Registration Amount</th>
                    <th>10% On Allotment</th>
                    <th>
                      40% within 30 days of Allotment + Execution of BBA +
                      include 50% EDC/IDC
                    </th>
                    <th>
                      25% within 90 days of Allotment + include 25% EDC/IDC
                    </th>
                    <th>
                      25% Offer of Possession + include 25% EDC/IDC
                    </th>
                    <th>Total Cost*</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>150.69</td>
                    <td>₹1,36,000</td>
                    <td>₹31,000</td>
                    <td>₹20,18,384</td>
                    <td>₹84,08,502</td>
                    <td>₹52,28,943</td>
                    <td>₹52,28,943</td>
                    <td>₹2,09,15,772</td>
                  </tr>
                </tbody>
              </table> */}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
