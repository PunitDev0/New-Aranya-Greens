import React, { useEffect, useState, useRef } from 'react';
import { Inertia } from '@inertiajs/inertia';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'flatpickr/dist/flatpickr.min.css';
import '../../../css/style.css';
import * as bootstrap from 'bootstrap';
import flatpickr from 'flatpickr';
import axios from 'axios';
import Header from './Header';
import BannerSection from './BannerSection';
import RegistrationModal from './RegistrationModal';
import MainContent from './MainContent';

const App = ({ flash }) => {
  const [countdown, setCountdown] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [regForm, setRegForm] = useState({
    applicant_name: '',
    father_or_husband_name: '',
    dob: '',
    phone: '',
    email: '',
    aadhaar: '',
    pan: '',
    address: '',
    city: '',
    pincode: '',
    state: '',
    quota: '',
    size: '',
    rmcode: '',
    terms: false,
  });
  const [enqForm, setEnqForm] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [regFormErrors, setRegFormErrors] = useState({});
  const [showFlash, setShowFlash] = useState(false);
  const dobInputRef = useRef(null);

  // Display flash message on page load
  useEffect(() => {
    if (flash && flash.message) {
      setShowFlash(true);
      // Auto-hide flash message after 5 seconds
      const timer = setTimeout(() => {
        setShowFlash(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [flash]);

  useEffect(() => {
    const endTime = Date.parse('November 23, 2025 18:00:00 PDT') / 1000;
    const makeTimer = () => {
      const now = Date.parse(new Date()) / 1000;
      const timeLeft = endTime - now;
      if (timeLeft <= 0) {
        setCountdown({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }
      const days = Math.floor(timeLeft / 86400);
      const hours = Math.floor((timeLeft - days * 86400) / 3600);
      const minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      const seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);
      setCountdown({
        days: days < 10 ? `0${days}` : days,
        hours: hours < 10 ? `0${hours}` : hours,
        minutes: minutes < 10 ? `0${minutes}` : minutes,
        seconds: seconds < 10 ? `0${seconds}` : seconds,
      });
    };
    const interval = setInterval(makeTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  // Fancybox initialization
  useEffect(() => {
    import('@fancyapps/ui')
      .then(({ Fancybox }) => {
        Fancybox.bind('[data-fancybox]', {});
      })
      .catch((error) => console.error('Error loading Fancybox:', error));
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsNavOpen(false);
    const element = document.querySelector(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const validateRegForm = () => {
    const errors = {};
    if (!regForm.applicant_name) errors.applicant_name = 'Applicant Name is required';
    if (!regForm.father_or_husband_name) errors.father_or_husband_name = 'Father/Husband Name is required';
    if (!regForm.dob) errors.dob = 'Date of Birth is required';
    else {
      const selectedDate = new Date(regForm.dob);
      const today = new Date();
      if (selectedDate > today) {
        errors.dob = 'Date of Birth cannot be in the future';
      }
    }
    if (!regForm.phone || !/^[0-9]{10}$/.test(regForm.phone)) errors.phone = 'Valid 10-digit Phone Number is required';
    if (!regForm.email || !/\S+@\S+\.\S+/.test(regForm.email)) errors.email = 'Valid Email is required';
    if (regForm.aadhaar && !/^[0-9]{12}$/.test(regForm.aadhaar)) errors.aadhaar = 'Valid 12-digit Aadhaar is required';
    if (!regForm.pan || !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(regForm.pan)) errors.pan = 'Valid PAN is required';
    if (!regForm.address) errors.address = 'Address is required';
    if (!regForm.city) errors.city = 'City is required';
    if (!regForm.pincode || !/^[0-9]{6}$/.test(regForm.pincode)) errors.pincode = 'Valid 6-digit Pincode is required';
    if (!regForm.state) errors.state = 'State is required';
    if (!regForm.quota) errors.quota = 'Quota is required';
    if (!regForm.size) errors.size = 'Size is required';
    if (!regForm.rmcode) errors.rmcode = 'RM Code is required';
    if (!regForm.terms) errors.terms = 'You must agree to the Terms and Conditions';
    return errors;
  };

  const handleRegFormChange = (e) => {
    const { name, value, type, checked } = e.target || e;
    setRegForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (regFormErrors[name]) {
      setRegFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleEnqFormChange = (e) => {
    const { name, value, type, checked } = e.target;

    setEnqForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleRegFormSubmit = async (e) => {
    e.preventDefault();

    const errors = validateRegForm();
    if (Object.keys(errors).length > 0) {
      setRegFormErrors(errors);
      return;
    }

    try {
      const response = await axios.post('/api/register', regForm);
      console.log('Registration Response:', response.data);

      if (response.data.success && response.data.payment_url) {
        // Close modal before redirect
        const modal = bootstrap.Modal.getInstance(document.getElementById('registrationModal'));
        modal.hide();
        // Reset form
        setRegForm({
          applicant_name: '',
          father_or_husband_name: '',
          dob: '',
          phone: '',
          email: '',
          aadhaar: '',
          pan: '',
          address: '',
          city: '',
          pincode: '',
          state: '',
          quota: '',
          size: '',
          rmcode: '',
          terms: false,
        });
        setRegFormErrors({});

        // Redirect to payment gateway
        // window.location.href = response.data.payment_url;
      } else {
        // Fallback if no payment URL
        setRegForm({
          applicant_name: '',
          father_or_husband_name: '',
          dob: '',
          phone: '',
          email: '',
          aadhaar: '',
          pan: '',
          address: '',
          city: '',
          pincode: '',
          state: '',
          quota: '',
          size: '',
          rmcode: '',
          terms: false,
        });
        setRegFormErrors({});

        const modal = bootstrap.Modal.getInstance(document.getElementById('registrationModal'));
        modal.hide();
        alert('Registration successful! Your application has been saved.');


        // Inertia.visit('/', {
        //   method: 'get',
        //   data: { message: 'Registration successful! (No payment required)' },
        //   preserveState: true,
        // });
      }
    } catch (error) {
      console.error('Registration Error:', error);

      if (error.response && error.response.data && error.response.data.errors) {
        setRegFormErrors(error.response.data.errors);
      } else {
        setShowFlash(true);
        flash.message = 'An error occurred during registration.';
        setTimeout(() => {
          setShowFlash(false);
        }, 5000);
      }
    }
  };

  const handleEnqFormSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Submitting Enquiry Form:', enqForm);

      // Send POST request to backend
      const response = await axios.post('/api/enquiry', enqForm);

      if (response.data.success) {
        alert(response.data.message); // show success message
        setEnqForm({ name: '', email: '', phone: '' }); // reset form
        const modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
        modal.hide(); // hide modal
      } else {
        alert(response.data.message || 'Something went wrong'); // handle backend error
      }
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      alert('Error submitting enquiry. Please try again later.');
    }
  };

  return (
    <div>
      {showFlash && flash && flash.message && (
        <div className="alert alert-dismissible fade show mt-3 mx-auto" style={{ maxWidth: '600px' }} role="alert">
          <strong>{flash.success ? 'Success' : 'Error'}</strong>: {flash.message}
          <button
            type="button"
            className="btn-close"
            onClick={() => setShowFlash(false)}
            aria-label="Close"
          ></button>
        </div>
      )}
      <Header
        isNavOpen={isNavOpen}
        toggleNav={toggleNav}
        handleNavLinkClick={handleNavLinkClick}
      />
      <BannerSection countdown={countdown} />
      <RegistrationModal
        regForm={regForm}
        regFormErrors={regFormErrors}
        handleRegFormChange={handleRegFormChange}
        handleRegFormSubmit={handleRegFormSubmit}
        validateRegForm={validateRegForm}
        dobInputRef={dobInputRef}
      />
      <MainContent
        enqForm={enqForm}
        handleEnqFormChange={handleEnqFormChange}
        handleEnqFormSubmit={handleEnqFormSubmit}
        handleNavLinkClick={handleNavLinkClick}
      />
    </div>
  );
};

export default App;