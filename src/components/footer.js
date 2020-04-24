import React from 'react';
import styled from 'styled-components';

const Footer = ({ ...styleProps }) => {
  return (
    <Wrapper {...styleProps}>
      <div className='container'>
        {'Copyright © '} {new Date().getFullYear()}
        {'. '} Impactfully
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  padding: 16px;
  background: ${({ theme }) => theme.color.primary.main};
  color: white;
  margin-top: auto;
  justify-self: flex-end;
`;

export default Footer;
