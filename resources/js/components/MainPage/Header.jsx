import React from 'react';

const Header = ({ isNavOpen, toggleNav }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container d-flex align-items-center justify-content-between py-2">
        {/* Logos */}
        <div className="d-flex align-items-center gap-2">
          <a href="/">
            <img src="images/download.jpg" className="single-client-logo" alt="Logo 1" />
          </a>
          <a href="/">
            <img src="images/support.png" className="single-client-logo" 
            alt="Logo 2" />
          </a>
        </div>

        {/* Menu button (mobile) */}
        <button
          id="menuToggle"
          className="d-md-none btn btn-light"
          onClick={toggleNav}
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* Menu items */}
        <ul
          className={`navM d-flex align-items-center gap-3 mb-0 ${
            isNavOpen
              ? 'd-flex flex-column position-absolute top-20 z-10 right-0 start-0 bg-white p-3 shadow-md'
              : 'd-none'
          } d-md-flex`}
          style={{ listStyle: 'none' }}
        >
          <li>
            <a href="tel:+919211494111">
              <i className="fas fa-phone"></i> +91-9211494111
            </a>
          </li>
          <li>
            <a href="mailto:info@deendayaljanawasyojnareg.org">
              <i className="fas fa-envelope"></i> info@deendayaljanawasyojnareg.org
            </a>
          </li>

          {/* Registration Open */}
          <li>
            <a
              href="#"
              className="register-btn text-white fw-bold"
              data-bs-toggle="modal"
              data-bs-target="#registrationModal"
              style={{ textDecoration: 'none' }}
            >
              <i className="fas fa-user-plus"></i> Registration Open
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;