/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';
import MaterialButton from '@material-ui/core/Button';

export function Spacer({ page, data, height }) {
  return <Wrapper height={height ? height : data.height ? data.height : 24} />;
}

const Wrapper = styled.div`
  width: 100%;
  background: transparent;
  height: ${props => props.height}px !important;
  content: '';
`;
