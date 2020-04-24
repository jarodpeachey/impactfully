import React from 'react';
import { StylesProvider } from './src/StylesProvider';
import Layout from './src/components/layout';
import { FirebaseProvider } from './src/FirebaseProvider';
// import { AuthProvider } from './srcAuthProvider';
import { AppProvider } from './src/AppProvider';

export const wrapRootElement = ({ element }) => {
  console.log(element);

  return (
    <FirebaseProvider>
      <AppProvider>
        <StylesProvider>{element}</StylesProvider>
      </AppProvider>
    </FirebaseProvider>
  );
};

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};
