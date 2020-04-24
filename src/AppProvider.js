import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import GoTrue from 'gotrue-js';

export const AppContext = React.createContext({});

export const AppProvider = ({ children }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [messageModalText, setMessageModalText] = useState(false);

  const ctx = {
    setShowSignupModal,
    setShowLoginModal,
    showSignupModal,
    showLoginModal,
    showMessageModal,
    setShowMessageModal,
    messageModalText,
    setMessageModalText
  };

  return (
    <AppContext.Provider value={{ ...ctx }}>{children}</AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.any.isRequired
};
