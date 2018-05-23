// @flow
import React from 'react';

import { Page, Body } from './Page';
import { LegalDefinitionsText } from '../common';

import { Heading } from './ui';

export const LegalDefinitions = () => (
  <Page>
    <Heading>Legal Definitions</Heading>
    <Body>
      <LegalDefinitionsText />
    </Body>
  </Page>
);
