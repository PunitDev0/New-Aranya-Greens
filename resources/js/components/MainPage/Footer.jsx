import React from 'react';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="disclaimer text-center">

                <p className="text-justify mb-2">
                  <b>Disclaimer:</b> This website is an informational platform for residential plotted projects offered under the Deen Dayal Jan Awas Yojana (DDJAY) policy of the Haryana Government. Marketing and customer facilitation services are provided by a privately operated real estate promotion entity. This is not an official government website.
                </p>
                <p className="mt-3 text-gray-600 font-medium">
                  Your privacy is important to us. We collect information only to serve you better.
                </p>
                <p className="mb-0 mt-4">
                  &copy; Copyright 2025. All Rights Reserved |{' '}
                  <a href="/about" className="text-decoration-none">About</a> |{' '}
                  <a href="/contact" className="text-decoration-none">Contact</a> |{' '}
                  <a href="/privacy" className="text-decoration-none">Privacy Policy</a> |{' '}
                  <a href="/terms" className="text-decoration-none">Terms & Conditions</a> |{' '}
                  <a href="/disclaimer" className="text-decoration-none">Disclaimer</a>
                </p>
                <p className="mt-2 text-xs text-gray-500">
                  By continuing to use this website, you agree to our use of cookies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="https://api.whatsapp.com/send?phone=+919311229433&text=Hello,%20I%20am%20interested%20in%20DDJAY%20Plots%20,%20Please%20get%20in%20touch%E2%80%A6"
        target="_blank"
        rel="noopener noreferrer"
        className="whtsap-btn"
        onClick={() => window.gtag_whatsapp_conversion?.()}
      >
        <img src="images/whatsup.png" className="w-100" alt="WhatsApp" />
      </a>

      <div id="contact" className="bid-site-visit">
        <div className="row">
          <div className="col">
            <a href="tel:+919311229433" onClick={() => window.gtag_call_conversion?.()}>
              <img src="images/call-icon-gif.gif" alt="Call" /><br /> Call Now
            </a>
          </div>
          <div className="col">
            <a
              href="https://api.whatsapp.com/send?phone=+919311229433&text=Hello,%20I%20am%20interested%20in%20DDJAY%20Plots%20,%20Please%20get%20in%20touch%E2%80%A6"
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