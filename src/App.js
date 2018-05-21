// @flow

import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import { GoogleTagManager } from './tracker';
import { Landing } from './landing';
import { ThemeProvider } from 'styled-components';
import 'change-bootstrap/dist/css/bootstrap-material-design.css';

const DefaultTheme = {
  background: '#e5f9f3',
  altBackground: '#c6f3ff',
  main: '#02bda5',
  alt: '#083b70',
  text: '#0c0c0c',
  altText: '#2a2a2a',
  breakpoints: {
    mobile: 0,
    landscape: 500,
    tablet: 1000,
    desktop: 1200,
  },
};

export const App = () => (
  <div>
    <GoogleTagManager gtmId="GTM-55R5ZNL" />
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/about" component={Landing} />
          <Route path="/careers" component={Landing} />
          <Route path="/legal" component={Landing} />
          <Route path="/notify-me-success" component={Landing} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  </div>
);

export default App;
