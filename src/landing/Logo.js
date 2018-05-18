// @flow
import React from 'react';
import styled from 'styled-components';

import variables from '../ui/variables';

import logo from './img/logo.svg';

const Container = styled.div`
  font-family: ${variables.fontPrimary};
  font-size: ${variables.fontSizeLarger};
  font-weight: ${variables.fontWeightBold};
  line-height: 1;
  letter-spacing: -0.5px;
`;

const Image = styled.img`
  width: 84px;
  display: block;
`;

export const Logo = () => (
  <Container>
    <Image src={logo} alt="Change" />
  </Container>
);

export default Logo;
