import React, { createContext, useState } from 'react';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleShowAlert = (message) => {
    setAlertMessage(message);
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
    setAlertMessage('');
  };

  return (
    <AlertContext.Provider
      value={{ showAlert, alertMessage, handleShowAlert, handleCloseAlert }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
