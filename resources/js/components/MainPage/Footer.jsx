import React from 'react';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="disclaimer text-center">
                <p className="text-justify">
                  <b>Disclaimer - </b> Please be advised that this website is not an official site and serves solely as an informational portal managed by a RERA authorized real estate agent. It does not constitute an offer or guarantee of any services. The prices displayed on this website are subject to change without prior notice, and the availability of properties cannot be guaranteed. The images showcased on this website are for representational purposes only and may not accurately reflect the actual properties. We may share your data with Real Estate Regulatory Authority (RERA) registered Developers for further processing as necessary. Additionally, we may send updates and information to the mobile number or email address registered with us. All rights reserved. The content, design, and information on this website are protected by copyright and other intellectual property rights. Any unauthorized use or reproduction of the content may violate applicable laws. For accurate and up-to-date information regarding services, pricing, availability, and any other details, it is recommended to contact us directly through the provided contact information on this website. Thank you for visiting our website.
                </p>
                <p>
                  &copy; Copyright 2025. All Rights Reserved{' '}
                  <a href="privacy.php" target="_blank">Privacy Policy</a> |{' '}
                  <a href="terms.php" target="_blank">Terms & Conditions</a> |{' '}
                  <a href="refund-policy.php" target="_blank">Refund Policy</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="https://api.whatsapp.com/send?phone=+919211494111&text=Hello,%20I%20am%20interested%20in%20DDJAY%20Plots%20,%20Please%20get%20in%20touch%E2%80%A6"
        target="_blank"
        rel="noopener noreferrer"
        className="whtsap-btn"
        onClick={() => window.gtag_whatsapp_conversion?.()}
      >
        <img src="images/whatsup.png" className="w-100" alt="WhatsApp" />
      </a>

      <div className="bid-site-visit">
        <div className="row">
          <div className="col">
            <a href="tel:+919211494111" onClick={() => window.gtag_call_conversion?.()}>
              <img src="images/call-icon-gif.gif" alt="Call" /><br /> Call Now
            </a>
          </div>
          <div className="col">
            <a
              href="https://api.whatsapp.com/send?phone=+919211494111&text=Hello,%20I%20am%20interested%20in%20DDJAY%20Plots%20,%20Please%20get%20in%20touch%E2%80%A6"
              onClick={() => window.gtag_whatsapp_conversion?.()}
            >
              <img src="images/whatsapp.gif" alt="WhatsApp" /><br /> Whatsapp
            </a>
          </div>
          <div className="col">
            <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img src="images/fillaform.jpeg" alt="Enquire" /> <br /> Enquire Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;