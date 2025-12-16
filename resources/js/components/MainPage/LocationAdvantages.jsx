import React from "react";
import { CheckCircle } from "lucide-react";

const LocationAdvantages = () => {
  const locationAdvantages = [
    "Strategically located on the northern edge of Delhi, Sonipat offers excellent access to the capital city.",
    "Unmatched road connectivity via KMP Expressway, Eastern Peripheral Expressway, and NH-44.",
    "Delhi–Karnal RRTS Rapid Rail corridor will significantly reduce daily commute time.",
    "Integrated into the Delhi–Mumbai Industrial Corridor (DMIC), ensuring rapid industrial and infrastructure growth.",
    "Kundli–Sonipat Investment Region (Phase II-A) set to boost logistics, industry, and housing demand.",
    "Upcoming metro connectivity to Sonipat will enhance Delhi access, reduce travel time, and increase property values.",
    "Located right opposite OP Jindal Global University—an international education hub boosting rental and resale potential.",
    "Rapidly developing social infrastructure with new malls, hospitals, and reputed schools.",
    "High ROI potential with competitive current pricing and strong appreciation driven by ongoing and upcoming infrastructure projects.",
  ];

  return (
    <div className="amenities jst-pb" id="amenities">
      <div className="container">
        <h2 className=" pb-5 text-center font-sans">
          Location Advantages
        </h2>

        <div className="row">
          {/* LEFT COLUMN */}
          <div className="col-md-6 col-sm-6">
            <div className="highlights-container text-sm">
              {locationAdvantages.map((point, index) => (
                <div className="flex gap-3 items-start" key={index}>
                  <CheckCircle className="text-green-600 w-5 h-5 mt-1" />
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div class="col-md-6 col-sm-6">
              <img src="images/Screenshot 2025-07-10 at 10.58.20 AM.png" class="/img-fluid img-thumbnail w-100" alt="Responsive-image" />
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.2059465918705!2d76.99502827500032!3d28.98126767547617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dbb00153a4279%3A0x76250346865c7cde!2sElite%20Homes%20%2B%2002%20Home!5e0!3m2!1sen!2sin!4v1748684383425!5m2!1sen!2sin" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
        </div>
      </div>
    </div>
  );
};

export default LocationAdvantages;
