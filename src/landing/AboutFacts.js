// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import variables from '../ui/variables';

import background from './img/photo-about-facts.jpg';

const Container = styled.div`
  position: relative;
  background: ${variables.colorBlueDark};
`;

const InnerContainer = styled.div`
  position: relative;
  padding: 48px 24px;
  z-index: ${variables.zIndexAboutFacts};
  ${breakpoint('tablet')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 960px;
    height: 320px;
    margin: 0 auto;
    padding: 0;
  `};
  ${breakpoint('desktop')`
    width: 1152px;
  `};
`;

const FactsColumn = styled.div`
  &:not(:last-child) {
    margin-bottom: 24px;
  }
  ${breakpoint('tablet')`
    flex: 0 0 33.33%;
    display: flex;
    align-items: center;
    margin: 0;
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  `};
`;

const Fact = styled.div`
  width: 100%;
  color: ${variables.colorWhite};
  font-size: ${variables.fontSizeNormal};
  font-family: ${variables.fontSecondary};
  line-height: 1.1;
  text-align: center;
  ${breakpoint('tablet')`
    font-size: ${variables.fontSizeLarger};
  `};
  ${breakpoint('desktop')`
    padding: 0 48px;
  `};
  strong {
    font-family: ${variables.fontPrimary};
    font-size: ${variables.fontSizeLarger};
    display: block;
    margin: 9px 0;
    ${breakpoint('tablet')`
      font-size: ${variables.fontSizeLargest};
    `};
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.25;
  ${props => (props.src ? `background: url(${props.src})` : null)};
  background-size: cover;
  background-position: 50% 50%;
`;

export const AboutFacts = () => (
  <Container>
    <InnerContainer>
      <FactsColumn>
        <Fact>
          Offices in <strong>Estonia & Singapore</strong>
        </Fact>
      </FactsColumn>
      <FactsColumn>
        <Fact>
          <strong>5600</strong> contributors
        </Fact>
      </FactsColumn>
      <FactsColumn>
        <Fact>
          <strong>$17.5 M+</strong> raised in 2017
        </Fact>
      </FactsColumn>
    </InnerContainer>
    <Background src={background} />
  </Container>
);

export default AboutFacts;
