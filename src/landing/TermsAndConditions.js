// @flow
import React from 'react';
import IntercomBubble from './IntercomBubble';
import { default as Page, Body } from './Page';
import { TermsAndConditionsText } from '../common';

import { GradientHeading } from './ui';

export const Legal = () => (
  <Page>
    <GradientHeading>Terms and conditions of Change</GradientHeading>
    <Body>
      <TermsAndConditionsText />
      <IntercomBubble />
    </Body>
  </Page>
);

export default Legal;
