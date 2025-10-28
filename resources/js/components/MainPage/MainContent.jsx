import React from 'react';

const MainContent = ({
  enqForm,
  handleEnqFormChange,
  handleEnqFormSubmit,
  handleNavLinkClick
}) => {
  return (
    <>
      <section className="elite-homes-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="md:flex md:justify-center blue-bg-box">
                <div className="w-full h-full md:w-1/2 md:h-1/2 place-items-center">
                  <div className="bg-blue-100 p-4 mt-4 rounded text-center text-black">
                    <h2 className="text-2xl font-bold">AARANYA GREENS | RESIDENTIAL PLOTS | BUILDER FLOORS | SECTOR 35 SONIPAT</h2>
                    <p>HRERA-PKL-SNP-675-2025 dated on 19-03-2025</p>
                    <p className="mt-4 font-bold">HARYANA GOVT. RESIDENTIAL PLOTS</p>
                    <p className="text-3xl font-bold text-blue-600">(Sonipat’s First 24 Meter Road Plots at This Price)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="amenities-bank" className="bg-gray-100 py-10">
  <h2 className="text-2xl font-semibold text-center font-sans pb-4">
    The Project has been Approved By
  </h2>

  <div className="flex flex-wrap justify-center items-center gap-6 px-4">
    <div className="flex justify-center items-center w-28 h-24">
      <img src="images/hdfcbank.png" alt="HDFC Bank" className="max-h-20 object-contain" />
    </div>
    <div className="flex justify-center items-center w-28 h-24">
      <img src="images/pnb.png" alt="PNB Bank" className="max-h-20 object-contain" />
    </div>
    <div className="flex justify-center items-center w-28 h-24">
      <img src="images/bob.jpg" alt="BOB Bank" className="max-h-20 object-contain" />
    </div>
    <div className="flex justify-center items-center w-28 h-24">
      <img src="images/icicibank.png" alt="ICICI Bank" className="max-h-24 w-4/5 object-contain" />
    </div>
    <div className="flex justify-center items-center w-28 h-24">
      <img src="images/AU.png" alt="AUSMALL Bank" className="max-h-20 object-contain" />
    </div>
  </div>

  <p className="text-center pt-6 text-gray-700">
    Plot owners can avail loans from these banks for financing purposes.
  </p>
</div>


      <section className="pd-30 top-details">
        <div className="container-fluid">
          <div class="flex justify-between">
            <div class="col-md-3">
              <div class="status-strip">
                <h4>Plots Starting</h4>
                <p>Price ₹2.09 cr*</p>
              </div>
            </div>
            <div class="col-md-3">
              <div class="status-strip">
                <h4>Total No. of Plots</h4>
                <p>20</p>
              </div>
            </div>

            {/* <div class="col-md-3">
                         <div class="status-strip">
                              <h4>Payment Plan</h4>
                            <p>10:40:25:25</p>
                           </div>
                       </div> */}



            <div class="col-md-3">
              <div class="status-strip">
                <h4>HRERA-NO</h4>
                <p>HRERA-PKL-SNP-675-2025 dated on 19-03-2025</p>
              </div>
            </div>






          </div>
        </div>
      </section>

      <div className="bg-success text-white p-4">
        <div className="container">
          <div className=" flex flex-row w-full items-center justify-between">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <h2 className="h4 h2-md mb-3">AARANYA GREENS, SECTOR - 35 SONIPAT</h2>
              <p>HRERA-PKL-SNP-675-2025 dated on 19-03-2025</p>
              {/* <a href="#" className="btn btn-danger px-4 py-2 fw-bold" data-bs-toggle="modal" data-bs-target="#registrationModal">
                EOI Registration Open
              </a> */}
              <a
                href="#"
                className="register-btn text-white fw-bold"
                data-bs-toggle="modal"
                data-bs-target="#registrationModal"
                style={{ textDecoration: 'none' }}
              >
                Registration Open
              </a>
            </div>
            <div className=" text-center w-fit">
              <img src="images/rera-logo.png" alt="DDJAY Image" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </div>

      <div className="amenities-highlights mt-10" id="amenities-highlights">
        <h2 className="cons-heading pb-5 text-center font-sans"> AARANYA GREENS SECTOR 35 SONIPAT HIGHLIGHTS</h2>
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <div class="amenities-listing">
                <ul class="list-disc list-inside">
                  <li>First-time availability on a 24 meter wide road at this price</li>
                  <li>Spread Across 6.5 Acres</li>
                  <li>Multi-Purpose Hall For community gatherings & events</li>
                  <li>24m & 9m Wide Roads Network and Pathways</li>
                  <li>Secure Gated Development Peace of mind with controlled access</li>
                  <li>Water Supply & Drainage System</li>
                </ul>
              </div>
            </div>

            <div class="col-md-6 col-sm-6">
              <div class="amenities-listing">
                <ul class="list-disc list-inside">
                  <li>Dedicated Commercial Area For everyday essentials</li>
                  <li>Lush Green Parks Serene spaces to unwind, walk, and relax</li>
                  <li>Safe and joyful spaces for children to explore and play</li>
                  <li>Illuminated avenues for a refined living experience</li>
                  <li>Multi-Purpose Hall For community gatherings & events</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="amenities-pricing" id="amenities-pricing">
        <h2 className="cons-heading pb-2 text-center font-sans">Price List</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="amenities-listing table-responsive">
                <table className="table table-bordered text-center">
                  <thead>
                    <tr>
                      <th className="main-th">UNIT SIZE (Sq.yd)</th>
                      <th className="main-th">UNIT PRICE (in Rs. Per Sq.yd.)</th>
                      <th className="main-th">Registration Amount</th>
                      <th className="main-th">10% On Allotment</th>
                      <th className="main-th">40% within 30 days of Allotment + Execution of BBA + include 50% EDC/IDC</th>
                      <th className="main-th">25% within 90 days of Allotment + include 25% EDC/IDC</th>
                      <th className="main-th">25% Offer of Possession + include 25% EDC/IDC</th>
                      <th className="main-th">Total Cost Include EDC/IDC</th>
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
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* <section className="mb-4 mt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div>
                <p className="bnk-details d-flex justify-content-center mb-4">Site Plan</p>
                <div className="abt-image">
                  <img src="images/layout.png" className="w-100" alt="Site Plan" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div>
                <p className="bnk-details d-flex justify-content-center mb-4">Layout Plan</p>
                <div className="abt-image">
                  <img src="images/ma.jpg" className="w-100" alt="Layout Plan" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}




      <section className="pd-30 gallery" id="gallery">
        <div className="container">
          <div className="text-center">
            <h2 className="cons-heading font-sans">Gallery</h2>
          </div>
          <div className="row">
            {[
              'gal1.jpeg',
              'gal2.jpeg',
              'gal3.jpeg',
              'gal4.jpeg',
              'gal5.jpeg',
              'gal6.jpeg',
              // 'gal7.jpeg',
              // 'gal8.jpeg',
            ].map((image, index) => (
              <div className="col-md-4 p-0" key={index}>
                <a data-fancybox="gallery-images" href={`images/${image}`}>
                  <img src={`images/${image}`} className="img-fluid img-thumbnail w-100" alt={`Gallery Image ${index + 1}`} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>


      <div class="amenities " id="amenities">
        <h2 class="cons-heading pb-2 text-center font-sans">
          AARANYA GREENS | RESIDENTIAL PLOTS | BUILDER FLOORS | SECTOR 35 SONIPAT
        </h2>
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <div class="amenities-listing">
                <p>Flowtech Estates proudly marks its debut in Sonipat with Aaranya Greens — a meticulously planned plotted residential enclave that blends thoughtful design with long-term value. Nestled in the land of our origins, this landmark project features precisely demarcated plots, elegant builder floors, curated green landscaping, and robust infrastructure — all crafted to deliver comfort, connectivity, and a high standard of living.</p>
                <p>From wide, paved roads to abundant open spaces, dependable water supply to well-engineered drainage and modern sewage systems — every detail has been planned to enhance everyday life, going far beyond what's promised in brochures.</p>
                <p>Developed under the Deen Dayal Jan Awas Yojna (DDJAY), Aaranya Greens offers freehold plots, interest subsidies, and affordable financing options for aspiring homeowners. For developers, individual plot registries and floor-wise loan approvals add to the ease and opportunity, making this not just a place to live, but a place to grow — both personally and financially.</p>


              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="amenities jst-pb" id="amenities">

        <div class="container">
          <h2 class="cons-heading pb-5 text-center font-sans">
            Location Advantages
          </h2>
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <div class="highlights-container">
                <div class="highlight-item flex gap-3">
                  <i class="fas fa-check-circle"></i>
                  <p className='text-sm'><strong>Strategic Location:</strong> Located on the northern edge of Delhi, Sonipat enjoys excellent access to the capital city.</p>
                </div>
                <div class="highlight-item flex gap-3">
                  <i class="fas fa-check-circle"></i>
                  <p className='text-sm'><strong>Unmatched Road Connectivity:</strong> Seamless travel via KMP Expressway, Eastern Peripheral Expressway, and NH-44.</p>
                </div>
                <div class="highlight-item flex gap-3">
                  <i class="fas fa-check-circle"></i>
                  <p className='text-sm'><strong>Future-Ready Transport:</strong> Delhi–Karnal RRTS Rapid Rail to significantly reduce commute time.</p>
                </div>
                <div class="highlight-item flex gap-3">
                  <i class="fas fa-check-circle"></i>
                  <p className='text-sm'><strong>Part of Mega Industrial Corridor:</strong> Integrated into the Delhi-Mumbai Industrial Corridor (DMIC), ensuring rapid development.</p>
                </div>
                <div class="highlight-item flex gap-3">
                  <i class="fas fa-check-circle"></i>
                  <p className='text-sm'><strong>Investment Growth Zone:</strong> Kundli-Sonipat Investment Region (Phase II-A) set to boost logistics, industry, and housing demand.</p>
                </div>
                <div class="highlight-item flex gap-3">
                  <i class="fas fa-check-circle"></i>
                  <p className='text-sm'><strong>Upcoming Metro Connectivity:</strong> Planned metro line to Sonipat will enhance Delhi access, reduce travel time, and raise property values.</p>
                </div>
                <div class="highlight-item flex gap-3">
                  <i class="fas fa-check-circle"></i>
                  <p className='text-sm'><strong>Educational Advantage:</strong> Right opposite OP Jindal Global University—an international education hub that boosts rental and resale potential.</p>
                </div>
                <div class="highlight-item flex gap-3">
                  <i class="fas fa-check-circle"></i>
                  <p className='text-sm'><strong>Thriving Social Infrastructure:</strong> Rapid growth in malls, hospitals, and schools turning Sonipat into a self-sustained urban hub.</p>
                </div>
                <div class="highlight-item flex gap-3">
                  <i class="fas fa-check-circle"></i>
                  <p className='text-sm'><strong>High ROI Potential:</strong> Competitive property prices today with high appreciation expected due to ongoing and upcoming infrastructure projects.</p>
                </div>


              </div>
            </div>

            <div class="col-md-6 col-sm-6">
              <img src="images/Screenshot 2025-07-10 at 10.58.20 AM.png" class="/img-fluid img-thumbnail w-100" alt="Responsive-image" />
              {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.2059465918705!2d76.99502827500032!3d28.98126767547617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dbb00153a4279%3A0x76250346865c7cde!2sElite%20Homes%20%2B%2002%20Home!5e0!3m2!1sen!2sin!4v1748684383425!5m2!1sen!2sin" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
          </div>
        </div>
      </div>

      <div className="pd-60" id="developer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="ftr_rera"><span>243 OF 2023</span></div>
            </div>
            <div className="col-lg-12">
              <div className="develop">
                <div className="devep-img">
                  <div className="sub-devep" style={{ backgroundColor: 'white' }}>
                    <h4>A BRAND WITH LEGACY ETCHED IN EXCELLENCE.</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Get a Callback</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body pd-30">
              <form className="modal-form" onSubmit={handleEnqFormSubmit}>
                <div className="modal-form-section">
                  <div className="form-row p-2">
                    <input
                      type="text"
                      className="border-0 form-control"
                      placeholder="Name"
                      name="name"
                      value={enqForm.name}
                      onChange={handleEnqFormChange}
                      required
                    />
                  </div>
                  <div className="form-row p-2">
                    <input
                      type="email"
                      className="border-0 form-control"
                      placeholder="Email"
                      name="email"
                      value={enqForm.email}
                      onChange={handleEnqFormChange}
                      required
                    />
                  </div>
                  <div className="form-row p-2">
                    <input
                      type="tel"
                      className="border-0 form-control"
                      placeholder="Phone"
                      name="phone"
                      value={enqForm.phone}
                      onChange={handleEnqFormChange}
                      maxLength="10"
                      pattern="[0-9]{10}"
                      required
                    />
                  </div>
                  <div className="modal-submit text-center">
                    <button type="submit" className="modal-submit-btn">Request A Call</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="disclaimer text-center">
                <p className="text-justify">
                  <b>Disclaimer - </b> Disclaimer - The content herein is for informational purposes only and does not constitute an offer or invitation to offer. All images are artistic impressions and not actual representations. Aaranya Greens, located in Sector 35, Sonipat, is a DDJAY project. Flowtech Estates does not guarantee the accuracy or completeness of the information. All details are subject to change without prior notice.
                </p>
                <p>
                  &copy; Copyright 2025. All Rights Reserved{' '}
                  <a href="privacy" target="_blank">Privacy Policy</a> |{' '}
                  <a href="terms" target="_blank">Terms & Conditions</a> |{' '}
                  <a href="refund-policy" target="_blank">Refund Policy</a>
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

export default MainContent;