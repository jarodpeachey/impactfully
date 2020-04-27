/* eslint-disable react/jsx-fragments */
import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider, ThemeContext } from 'styled-components';
import {
  faShoppingCart,
  faArrowRight,
  faArrowLeft,
  faTrash,
  faBars,
  faTimes,
  faUserCircle,
  faPencilAlt,
  faCheck
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  ThemeProvider as MaterialUIThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';
import PageLayout from './pageLayout';

library.add(
  faShoppingCart,
  faArrowRight,
  faArrowLeft,
  faTrash,
  faBars,
  faTimes,
  faUserCircle,
  faPencilAlt,
  faCheck
);

const Layout = ({ children, pageContext }) => {
  const theme = useContext(ThemeContext);

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
      main: theme.color.primary.main
    },
    secondary: {
      main: theme.color.secondary.main
    },
    background: {
      default: theme.color.primary.dark
    }
  };

  const breakpoints = {
    keys: ['sm', 'md', 'lg', 'xl'],
    values: {
      sm: 576,
      md: 769,
      lg: 960,
      xl: 1200
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
      <PageLayout title={data.site.siteMetadata.title}>{children}</PageLayout>
    </MaterialUIThemeProvider>
  );
};

export const Site = styled.div``;

export default Layout;
