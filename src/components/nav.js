/* eslint-disable react/jsx-fragments */
import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled, { css } from 'styled-components';

const Nav = () => {
  return (
    <>
      <Wrapper>
        <StyledMenuItem
          active={
            typeof window !== 'undefined'
              ? window.location.pathname === '/signup'
              : false
          }
        >
          <Link to='/signup'>Signup</Link>
        </StyledMenuItem>
        <StyledMenuItem
          active={
            typeof window !== 'undefined'
              ? window.location.pathname === '/login'
              : false
          }
        >
          <Link to='/login'>Login</Link>
        </StyledMenuItem>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: none;
  margin-left: auto;
  @media (min-width: ${props => props.theme.breakpoints.md}px) {
    display: flex;
    align-items: center;
  }
`;

const StyledMenuItem = styled.div`
  color: white;
  transition-duration: 0.3s;
  font-size: 18px;
  font-weight: 500;
  border-bottom: ${props => (props.active ? '2px solid #e7e7e7' : 'none')};
  a {
    width: 100%;
    height: 100%;
    display: block;
    text-decoration: none;
    color: inherit !important;
    padding: 8px 16px;
  }
  &:hover {
    border-bottom: 2px solid #f7f7f7;
    transition-duration: 0.3s;
  }
`;

export default Nav;
