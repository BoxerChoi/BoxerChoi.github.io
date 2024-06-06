import React, { useContext } from 'react';
import AlertContext from './AlertContext';
import '../../css/util/CustomAlert.scss';

const CustomAlert = () => {
  const { showAlert, alertMessage, handleCloseAlert } =
    useContext(AlertContext);

  return (
    showAlert && (
      <div className="custom-alert">
        <div className="custom-alert-content">
          <span className="close-btn" onClick={handleCloseAlert}>
            &times;
          </span>
          <p>{alertMessage}</p>
        </div>
      </div>
    )
  );
};

export default CustomAlert;
