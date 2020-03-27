import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

export const AppContext = React.createContext({});

const AppProvider = ({ children }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [messageModalText, setMessageModalText] = useState(false);
  const [signedIn, setSignedInState] = useState(false);

  console.log('Signed In: ', signedIn);

  const setSignedIn = (bool) => {
    setSignedInState(bool);
  }

  const ctx = {
    setShowSignupModal,
    setShowLoginModal,
    showSignupModal,
    showLoginModal,
    signedIn,
    setSignedIn,
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

export default AppProvider;
