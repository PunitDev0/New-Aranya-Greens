import React from "react";

export default function Highlights() {
  return (
    <section
      className="amenities-highlights mt-10"
      id="amenities-highlights"
    >
      <h2 className="cons-heading pb-5 text-center font-sans">
        AARANYA GREENS SECTOR 35 SONIPAT HIGHLIGHTS
      </h2>

      <div className="container">
        <div className="row">

          {/* LEFT COLUMN */}
          <div className="col-md-6 col-sm-6">
            <div className="amenities-listing">
              <ul className="list-disc list-inside space-y-2">
                <li>First-time availability on a 24 meter wide road at this price</li>
                <li>Spread Across 6.5 Acres</li>
                <li>Multi-Purpose Hall for community gatherings & events</li>
                <li>24m & 9m Wide Roads Network and Pathways</li>
                <li>Secure Gated Development – peace of mind with controlled access</li>
                <li>Water Supply & Drainage System</li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-md-6 col-sm-6">
            <div className="amenities-listing">
              <ul className="list-disc list-inside space-y-2">
                <li>Dedicated Commercial Area for everyday essentials</li>
                <li>Lush Green Parks – serene spaces to unwind, walk, and relax</li>
                <li>Safe and joyful spaces for children to explore and play</li>
                <li>Illuminated avenues for a refined living experience</li>
                <li>Multi-Purpose Hall for community gatherings & events</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
