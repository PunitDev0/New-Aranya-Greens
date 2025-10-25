import React from 'react';

const BannerSection = ({ countdown }) => {
  return (
    <>
      <div className="news-tricker">
        <marquee width="100%" direction="left" height="100px">
          ATTENTION REGISTRATION OPEN !!!! Book Your Shop under Affordable Housing Policy 2013 for Aranya Greens *** 33% Quota Reserved for Women *** 33% Quota Reserved under Government Category *** UNIT ALLOTMENT DATE 7 November 2025 *** LAST DATE OF APPLICATION 31 October 2025 *** Registration Amount is Fully Refundable for Unsuccessful Applicants Within 14 Working Days
        </marquee>
      </div>

      <section className="bnr-section">
        <div className="container">
          <div className="row">
            {/* LEFT COLUMN */}
            <div className="col-md-3">
              <div className="col-md-12">
                <div className="one-sec">
                  <span><p>Registration Open Until - 31/10/25 Friday</p></span>
                </div>

                <div className="two-sec scond">
                  <div id="timer" className="flex-wrap d-flex justify-content-center text-center">
                    <p className="text-success fw-bold">Registration Open</p>
                    <div>
                      <span>{countdown.days} Days </span>
                      <span>{countdown.hours} Hours </span>
                      <span>{countdown.minutes} Minutes </span>
                      <span>{countdown.seconds} Seconds</span>
                    </div>
                  </div>
                </div>

                <div className="one-sec trd">
                  <span><a href="#payment-plan">Attractive Payment Plan</a></span>
                </div>

                <div className="one-sec">
                  <span><p>HRERA No. PKL-SNP-548-2024 - Aranya Greens</p></span>
                </div>

                <div className="one-sec trd">
                  <span><a href="#loan">Loan Facility Available</a></span>
                </div>

                <div className="one-sec scond">
                  <span><p className="text-success fw-bold">EOI Registration Open</p></span>
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
                    <button type="button" data-bs-target="#bannerCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="images/aranyabanner.jpeg" className="d-block w-100" alt="Aranya Greens Slide 1" />
                    </div>
                    <div className="carousel-item">
                      <img src="images/aranyabanner1.jpeg" className="d-block w-100" alt="Aranya Greens Slide 2" />
                    </div>
                    <div className="carousel-item">
                      <img src="images/aranyabanner2.jpeg" className="d-block w-100" alt="Aranya Greens Slide 3" />
                    </div>
                    <div className="carousel-item">
                      <img src="images/aranyabanner3.jpeg" className="d-block w-100" alt="Aranya Greens Slide 4" />
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
            <div class="col-md-3">
                      <div class="col-md-12">

                          
                           
                            <div class="one-sec">
                             <span><p class="">HRERA-PKL-SNP-675-2025 dated on 19-03-2025 </p></span>
                           </div>
                           
                            <div class="two-sec scond click_pad">
                            <p><span><i class="fa fa-check-double"></i></span>Click to View Final License<a href="images/final-licence.pdf" target="_blank" class="text-red blink-soft"><i class="fa-solid fa-arrow-right"></i>Click Here</a></p>
                            <p><span><i class="fa fa-check-double"></i></span> Click to View Layout Plan<a href="images/layoutplan.pdf" target="_blank" class="text-red blink-soft"><i class="fa-solid fa-arrow-right"></i>Click Here</a></p>
                            <p><span><i class="fa fa-check-double"></i></span> Click to View RERA Certificate<a href="images/reracertificate.pdf" target="_blank" class="text-red blink-soft"><i class="fa-solid fa-arrow-right"></i>Click Here</a></p>
                            <p><span><i class="fa fa-check-double"></i></span>Click to View Brochure<a href="images/AaranyaGreensBrochure.pdf" target="_blank" class="text-red blink-soft"><i class="fa-solid fa-arrow-right"></i>Click Here</a></p>
                            <p><span><i class="fa fa-check-double"></i></span>Click to View Price List<a href="images/AaranyaGreensNewPriceList.pdf" target="_blank" class="text-red blink-soft"><i class="fa-solid fa-arrow-right"></i>Click Here</a></p>
                            <p><span><i class="fa fa-check-double"></i></span> Click to View Factsheet<a href="images/Aaranyafactsheetnewupdated.pdf" target="_blank" class="text-red blink-soft"><i class="fa-solid fa-arrow-right"></i>Click Here</a></p>
                            
                        

                           </div>
                           <div class="one-sec trd">
                             <span><a href="#" class="">Registration Open Only for 29 Plots.</a></span>
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