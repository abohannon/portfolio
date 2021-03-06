import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Link from 'gatsby-link';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Work from '../components/Work';
import Tools from '../components/Tools';

const IndexPage = () => (
  <MuiThemeProvider>
    <div>
      <Nav />
      <Header />
      <Work />
      <Tools />
    </div>
  </MuiThemeProvider>
);

export default IndexPage;
