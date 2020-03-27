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
import {
  ThemeProvider as MaterialUIThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';

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

  const palette = {
    primary: {
      main: theme.colors.primary
    },
    secondary: {
      main: theme.colors.secondary
    },
    background: {
      default: theme.colors.background
    }
  };

  const breakpoints = {
    keys: ['sm', 'md', 'lg', 'xl'],
    values: {
      sm: theme.breakpoints.small,
      md: theme.breakpoints.medium,
      lg: theme.breakpoints.large,
      xl: theme.breakpoints.huge
    }
  };

  const overrides = {
    // MuiButton: {
    //   root: {
    //     color: '#fff !important;'
    //   }
    // }
  };

  const muiTheme = createMuiTheme({
    spacing: 4,
    palette,
    breakpoints,
    overrides,
    typography: {
      useNextVariants: true
    }
  });

  return (
    <MaterialUIThemeProvider theme={muiTheme}>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <PageLayout title={data.site.siteMetadata.title}>
            {children}
          </PageLayout>
        </AppProvider>
      </ThemeProvider>
    </MaterialUIThemeProvider>
  );
};

export const Site = styled.div``;

export default Layout;
