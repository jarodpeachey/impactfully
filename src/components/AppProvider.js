import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import GoTrue from 'gotrue-js';

export const AppContext = React.createContext({});

const AppProvider = ({ children }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [messageModalText, setMessageModalText] = useState(false);
  const [signedIn, setSignedInState] = useState(false);
  const [user, setUserState] = useState(false);

  console.log('Signed In: ', signedIn);

  const setUser = newUser => {
    setUserState(newUser);
    setSignedInState(true);
  };

  const auth = new GoTrue({
    APIUrl: 'https://impactfully.netlify.com/.netlify/identity',
    audience: '',
    setCookie: true
  });

  const ctx = {
    auth,
    setShowSignupModal,
    setShowLoginModal,
    showSignupModal,
    showLoginModal,
    signedIn,
    setUser,
    user,
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
