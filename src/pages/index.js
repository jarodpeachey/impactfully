import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles, LinearProgress } from '@material-ui/core';
import { Link } from 'gatsby';
import { PageLayout } from '../components/pageLayout';
import Row from '../components/grid/row';
import { AppContext } from '../components/AppProvider';

const Index = () => {
  return (
    <Wrapper>
      <Card>
        <CardTitle>Dummy Content</CardTitle>
        <CardDescription>
          This is some dummy content so the page looks better. Go ahead, click
          the button that does absolutely nothing.
        </CardDescription>
        <StyledButton variant='contained' color='primary'>
          Click Me
        </StyledButton>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Card = styled.div`
  padding: 48px;
  background: white;
  border-radius: 3px;
  box-shadow: 1px 1px 0px 0px #ddd, 2px 2px 5px 0px #eee;
`;

const CardTitle = styled.h1`
  width: fit-content;
  margin: 0 auto;
  margin-bottom: 24px;
`;

const CardDescription = styled.p`
  width: fit-content;
  margin: 0 auto;
  font-size: 18px;
  color: #666;
`;

const StyledButton = styled(Button)`
  margin: 24px auto 0 !important;
  display: block !important;
  width: fit-content !important;
`;

export default Index;
