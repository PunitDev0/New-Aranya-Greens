import React, { useState } from 'react';

const Header = ({ isNavOpen, toggleNav, handleNavLinkClick }) => {
  return (
    <header>
      <div className="container navbar-wrapper-main">
        <div className="logo-client">
          <a href="/">
            <img src="images/download.jpg" className="single-client-logo" alt="Logo 1" />
          </a>
          <a href="/">
            <img src="images/support.png" className="single-client-logo" alt="Logo 2" />
          </a>
        </div>
        <button id="menuToggle" className="d-md-none" onClick={toggleNav}>
          <i className="fas fa-bars"></i>
        </button>
        <ul className={`navM collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <li>
            <a href="tel:+919211494111" onClick={() => window.gtag_call_conversion?.()}>
              <i className="fas fa-phone"></i> +91-9211494111
            </a>
          </li>
          <li>
            <a href="mailto:info@deendayaljanawasyojnareg.org">
              <i className="fas fa-envelope"></i> info@deendayaljanawasyojnareg.org
            </a>
          </li>
          <li>
            <a href="#" className="register-btn" data-bs-toggle="modal" data-bs-target="#registrationModal">
              <i className="fas fa-user-circle"></i> EOI Registration Open
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;