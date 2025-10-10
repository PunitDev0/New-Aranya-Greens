import React from 'react';

const BannerSection = ({ countdown }) => {
  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      <div className="news-tricker">
        <marquee width="100%" direction="left" height="100px">
          !!!! *** APPLICATION OPEN *** Unit Allotment Date - 16/10/25 Thursday and Last Date is - 12/10/25 Sunday *** Unit Confirmation by Email *** IMPORTANT NOTE: REGISTRATION AMOUNT IS REFUNDABLE FOR APPLICANTS WHO ARE NOT SUCCESSFUL!
        </marquee>
      </div>

      <section className="bnr-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="col-md-12">
                <div className="one-sec">
                  <span><p>Last Date of EOI Registration - 12/10/25 Sunday</p></span>
                </div>
                <div className="two-sec scond">
                  <div id="timer" className="flex-wrap d-flex justify-content-center">
                    <div id="days" className="align-items-center flex-column d-flex justify-content-center">
                      {countdown.days}<span>Days</span>
                    </div>
                    <div id="hours" className="align-items-center flex-column d-flex justify-content-center">
                      {countdown.hours}<span>Hours</span>
                    </div>
                    <div id="minutes" className="align-items-center flex-column d-flex justify-content-center">
                      {countdown.minutes}<span>Minutes</span>
                    </div>
                    <div id="seconds" className="align-items-center flex-column d-flex justify-content-center">
                      {countdown.seconds}<span>Seconds</span>
                    </div>
                  </div>
                </div>
                <div className="one-sec trd">
                  <span><a href="#" onClick={(e) => handleNavLinkClick(e, '#amenities-payment')}>Attractive Payment Plan</a></span>
                </div>
                <div className="one-sec">
                  <span><p>HRERA No. PKL-SNP-548-2024</p></span>
                </div>
                <div className="one-sec trd">
                  <span><a href="#" onClick={(e) => handleNavLinkClick(e, '#amenities-loan')}>Loan Facility Available</a></span>
                </div>
                <div className="one-sec scond">
                  <span><p className="scond">EOI Registration Open</p></span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="carousel-wrapper">
                <img src="images/rera-logo.png" alt="Overlay" className="carousel-overlay-img" />
                <div id="bannerCarousel" className="carousel slide bnr-img" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="images/fieldImage2.webp" className="d-block w-100" alt="Slide 1" />
                    </div>
                    <div className="carousel-item">
                      <img src="images/fieldImage8.webp" className="d-block w-100" alt="Slide 2" />
                    </div>
                    <div className="carousel-item">
                      <img src="images/fieldImage9.webp" className="d-block w-100" alt="Slide 3" />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#bannerCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#bannerCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="col-md-12">
                <div className="one-sec scond">
                  <span><p className="scond">Pay Just 31,000/- for EOI Registration</p></span>
                </div>
                <div className="one-sec trd">
                  <span><a href="#" className="" data-bs-toggle="modal" data-bs-target="#registrationModal">EOI Registration Open</a></span>
                </div>
                <div className="two-sec scond">
                  <p><span><i className="fas fa-check-double"></i></span>Elite Home Site Plan<a href="images/SiteMap.pdf" target="_blank" className="text-red blink-soft"><i className="fas fa-arrow-right"></i>Click Here</a></p>
                  <p><span><i className="fas fa-check-double"></i></span>Elite Home Brochure <a href="images/BROUCHER.pdf" target="_blank" className="text-red blink-soft"><i className="fas fa-arrow-right"></i>Click Here</a></p>
                  <p><span><i className="fas fa-check-double"></i></span>Click to View HRERA license<a href="images/RERA.pdf" target="_blank" className="text-red blink-soft"><i className="fas fa-arrow-right"></i>Click Here</a></p>
                  <p><span><i className="fas fa-check-double"></i></span>Click to View Project License<a href="images/projectLICENSE.pdf" target="_blank" className="text-red blink-soft"><i className="fas fa-arrow-right"></i>Click Here</a></p>
                  <p><span><i className="fas fa-check-double"></i></span>Click to View Price List<a href="images/pricelist.pdf" target="_blank" className="text-red blink-soft"><i className="fas fa-arrow-right"></i>Click Here</a></p>
                </div>
                <div className="one-sec scond">
                  <span><p className="scond">Unit Allotment Date is - 16/10/25 Thursday</p></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerSection;