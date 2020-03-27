import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import Nav from './nav';
import { ThemeContext } from './theme';
import AccountMenu from './AccountMenu';
import MobileNav from './mobileNav';
import { withStyles } from '@material-ui/styles';
import { useContext } from 'react';
import { AppContext } from './AppProvider';

const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

const Header = ({ siteTitle, classes, ...styleProps }) => {
  const [headerScrolled, setHeaderState] = useState(false);
  const { signedIn } = useContext(AppContext);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 78) {
        setHeaderState(true);
      } else {
        setHeaderState(false);
      }
    });
  });

  return (
    <Wrapper scrolled={headerScrolled}>
      <Flex className='container header'>
        <MobileNav />
        <SiteTitle signedIn={signedIn}>
          <Link to='/' className='no-underline'>
            {siteTitle}
          </Link>
        </SiteTitle>
        <Nav />
        <AccountMenu signedIn={signedIn} />
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  transition-duration: 0.3s;
  background: ${props => props.theme.colors.primary};
  top: 0;
  left: auto;
  right: 0;
  position: fixed;
  width: 100%;
  display: flex;
  z-index: 1100;
  box-sizing: border-box;
  flex-shrink: 0;
  flex-direction: column;
  box-shadow: ${props =>
    props.scrolled
      ? '0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)'
      : null};
  backdrop-filter: ${props => (props.scrolled ? 'blur(8px)' : null)};
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: ${props => props.theme.breakpoints.md}px) {
    justify-content: flex-start;
  }
`;

const SiteTitle = styled.h1`
  color: white;
  text-decoration: none !important;
  border: none !important;
  font-weight: 500 !important;
  margin: 0 auto;
  @media (min-width: 769px) {
    margin: 0;
  }
  @media (max-width: 769px) {
    font-size: 32px;
    position: relative;
    a {
      font-size: 32px;
    }
  }
  a {
    color: white;
    text-decoration: none !important;
    border: none !important;
    display: flex;
    align-items: center;
    height: 100%;
  }
`;

const styles = () => ({
  appBar: {
    backdropFilter: 'blur(8px)'
  }
});

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ''
};

export default withStyles(styles)(Header);
