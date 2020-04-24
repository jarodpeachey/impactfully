/* eslint-disable react/jsx-fragments */
/* eslint-disable import/prefer-default-export */
import React, { useContext } from 'react';
import styled from 'styled-components';
import SEO from './seo';
import { AppContext } from '../AppProvider';
import LoginModal from './account/LoginModal';
import SignupModal from './account/SignupModal';
import MessageModal from './MessageModal';
import './style.css';
import { Spacer } from '../blocks/spacer';
import Footer from './footer';
import Header from './header';

export default function PageLayout({ children, title }) {
  const {
    showLoginModal,
    showSignupModal,
    setShowLoginModal,
    setShowSignupModal,
    showMessageModal,
    setShowMessageModal,
    messageModalText,
    auth
  } = useContext(AppContext);

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  const closeSignupModal = () => {
    setShowSignupModal(false);
  };

  const closeMessageModal = () => {
    setShowMessageModal(false);
  };

  return (
    <SiteWrapper>
      <SEO />
      <Header siteTitle={title} />
      <PageWrapper className='container' showHero={false}>
        <Spacer height={58} />
        {children}
        {showLoginModal && (
          <LoginModal
            pathname={window.location.pathname}
            show={showLoginModal}
            toggleFunction={closeLoginModal}
          />
        )}
        {showSignupModal && (
          <SignupModal
            pathname={window.location.pathname}
            show={showSignupModal}
            toggleFunction={closeSignupModal}
          />
        )}
        {showMessageModal && (
          <MessageModal
            pathname={window.location.pathname}
            show={showMessageModal}
            toggleFunction={closeMessageModal}
            text={messageModalText}
          />
        )}
      </PageWrapper>
      <Footer />
    </SiteWrapper>
  );
}

const PageWrapper = styled.div`
  // padding: 0;
  // display: flex;
  // align-items: space-between;
  // height: 100%;
  // flex-direction: column;
`;

const SiteWrapper = styled.div`
  padding: 0;
  display: flex;
  align-items: space-between;
  height: 100%;
  flex-direction: column;
`;
