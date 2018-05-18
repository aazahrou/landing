// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import variables from '../ui/variables';

import background from './img/background-about.jpg';

const Container = styled.div`
  padding: 0 24px;
  margin: 24px 0 48px;
  ${breakpoint('tablet')`
    width: 960px;
    margin: 0 auto;
    padding: 244px 0 192px;
    padding-right: calc(480px + 48px);
  `};
  ${breakpoint('desktop')`
    width: 1152px;
    padding-right: calc(576px + 48px);
  `};
`;

const IntroHeading = styled.div`
  font-family: ${variables.fontSecondary};
  font-size: ${variables.fontSizeLarge};
  margin-bottom: 18px;
  ${breakpoint('tablet')`
    font-size: ${variables.fontSizeLarger};
    margin-bottom: 36px;
  `};
`;

const IntroBody = styled.div`
  color: ${variables.colorNeutralDark};
  font-family: ${variables.fontSecondary};
  ${breakpoint('tablet')`
  `};
  p {
    margin-bottom: 12px;
    ${breakpoint('tablet')`
      font-size: ${variables.fontSizeMedium};
    `};
  }
`;

const Background = styled.div`
  display: none;
  pointer-events: none;
  ${breakpoint('tablet')`
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    z-index: ${variables.zIndexHeroBackground};
    width: 653px;
    height: 618px;
  `};
`;

const BackgroundImage = styled.img`
  ${breakpoint('tablet')`
    width: 100%;
  `};
`;

export const AboutIntro = () => (
  <Container>
    <IntroHeading>
      Change is a new age financial proposition for individuals with high
      financial ambitions.
    </IntroHeading>
    <IntroBody>
      <p>
        It was created for young and forward-looking men and women who feel
        disconnected with the way banks operate.
      </p>
      <p>
        The clean, minimalist look of Change’s logo was designed to fit our
        vision. The broken circle represents Change – the ability to “break the
        loop" and take control.
      </p>
    </IntroBody>
    <Background>
      <BackgroundImage src={background} alt="" />
    </Background>
  </Container>
);

export default AboutIntro;
