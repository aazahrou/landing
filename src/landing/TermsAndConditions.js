// @flow
import React from 'react';
import IntercomBubble from './IntercomBubble';
import { default as Page, Body } from './Page';
import { TermsAndConditionsText } from '../common';

import { Heading } from './ui';

export const Legal = () => (
  <Page>
    <Heading>Terms and conditions of Change</Heading>
    <Body>
      <TermsAndConditionsText />
      <IntercomBubble />
    </Body>
  </Page>
);

export default Legal;
