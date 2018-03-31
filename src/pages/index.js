import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Work from '../components/Work';
import About from '../components/About';
import Tools from '../components/Tools';

const IndexPage = () => (
  <MuiThemeProvider>
    <div>
      <Nav />
      <Header />
      <Work />
      <About />
      <Tools />
    </div>
  </MuiThemeProvider>
);

export default IndexPage;
