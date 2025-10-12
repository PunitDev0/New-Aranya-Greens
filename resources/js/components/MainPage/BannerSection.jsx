import React from 'react';

const BannerSection = () => {
  return (
    <>
      <div className="news-tricker">
        <marquee width="100%" direction="left" height="100px">
          ⚠️ *** REGISTRATION CLOSED *** Unit Allotment Date - 16/10/25 Thursday. 
          Thank you for your interest! Applications are now closed.
        </marquee>
      </div>

      <section className="bnr-section">
        <div className="container">
          <div className="row">
            {/* LEFT COLUMN */}
            <div className="col-md-3">
              <div className="col-md-12">
                <div className="one-sec">
                  <span><p>Registration Closed on - 12/10/25 Sunday</p></span>
                </div>

                <div className="two-sec scond">
                  <div id="timer" className="flex-wrap d-flex justify-content-center text-center">
                    <p className="text-danger fw-bold">Registration Closed</p>
                  </div>
                </div>

                <div className="one-sec trd">
                  <span><a href="#" onClick={(e) => e.preventDefault()}>Attractive Payment Plan</a></span>
                </div>

                <div className="one-sec">
                  <span><p>HRERA No. PKL-SNP-548-2024</p></span>
                </div>

                <div className="one-sec trd">
                  <span><a href="#" onClick={(e) => e.preventDefault()}>Loan Facility Available</a></span>
                </div>

                <div className="one-sec scond">
                  <span><p className="text-danger fw-bold">EOI Registration Closed</p></span>
                </div>
              </div>
            </div>

            {/* CENTER COLUMN */}
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

            {/* RIGHT COLUMN */}
            <div className="col-md-3">
              <div className="col-md-12">
                <div className="one-sec scond">
                  <span><p className="scond">Pay Just 31,000/- for EOI Registration (Now Closed)</p></span>
                </div>

                <div className="one-sec trd">
                  <span>
                    <button className="btn btn-secondary w-100" disabled>
                      Registration Closed
                    </button>
                  </span>
                </div>

                <div className="two-sec scond">
                  <p><span><i className="fas fa-check-double"></i></span>Elite Home Site Plan<a href="images/SiteMap.pdf" target="_blank" className="text-red blink-soft"><i className="fas fa-arrow-right"></i>Click Here</a></p>
                  <p><span><i className="fas fa-check-double"></i></span>Elite Home Brochure <a href="images/BROUCHER.pdf" target="_blank" className="text-red blink-soft"><i className="fas fa-arrow-right"></i>Click Here</a></p>
                  <p><span><i className="fas fa-check-double"></i></span>View HRERA license<a href="images/RERA.pdf" target="_blank" className="text-red blink-soft"><i className="fas fa-arrow-right"></i>Click Here</a></p>
                  <p><span><i className="fas fa-check-double"></i></span>View Project License<a href="images/projectLICENSE.pdf" target="_blank" className="text-red blink-soft"><i className="fas fa-arrow-right"></i>Click Here</a></p>
                  <p><span><i className="fas fa-check-double"></i></span>View Price List<a href="images/pricelist.pdf" target="_blank" className="text-red blink-soft"><i className="fas fa-arrow-right"></i>Click Here</a></p>
                </div>

                <div className="one-sec scond">
                  <span><p className="scond">Unit Allotment Date - 16/10/25 Thursday</p></span>
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
