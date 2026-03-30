import React, { useEffect, useRef } from 'react';
import flatpickr from 'flatpickr';

const RegistrationModal = ({
  regForm,
  regFormErrors,
  handleRegFormChange,
  handleRegFormSubmit,
  validateRegForm,
  dobInputRef
}) => {
  useEffect(() => {
    if (dobInputRef.current) {
      const fp = flatpickr(dobInputRef.current, {
        maxDate: 'today',
        dateFormat: 'Y-m-d',
        defaultDate: regForm.dob || null,
        onChange: (selectedDates, dateStr) => {
          handleRegFormChange({ target: { name: 'dob', value: dateStr } });
        },
        onReady: () => console.log('Flatpickr initialized'),
        onError: (error) => console.error('Flatpickr error:', error),
      });
      return () => fp.destroy();
    }
  }, [dobInputRef]);

  return (
    <div className="modal fade" id="registrationModal" tabIndex="-1" aria-labelledby="registrationModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-xl modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="registrationModalLabel">Registration Form</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-center py-10">
            <h4 className="text-red-600 font-bold mb-4">Registration Closed</h4>
            <p className="text-gray-600">
              Thank you for your interest. The registration period for this project has ended. 
              Please stay tuned for future updates.
            </p>
            <div className="mt-6">
              <button 
                type="button" 
                className="btn btn-secondary rounded-0" 
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;
