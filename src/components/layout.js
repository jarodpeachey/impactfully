/* eslint-disable react/jsx-fragments */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import {
  faShoppingCart,
  faArrowRight,
  faArrowLeft,
  faTrash,
  faBars,
  faTimes,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { theme } from './theme';
import PageLayout from './pageLayout';
import AppProvider, { AppContext } from './AppProvider';

library.add(
  faShoppingCart,
  faArrowRight,
  faArrowLeft,
  faTrash,
  faBars,
  faTimes,
  faUserCircle
);

const Layout = ({ children, pageContext }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <PageLayout title={data.site.siteMetadata.title}>{children}</PageLayout>
      </AppProvider>
    </ThemeProvider>
  );
};

export const Site = styled.div``;

export default Layout;
