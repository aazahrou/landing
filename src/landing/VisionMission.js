// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import variables from '../ui/variables';
import { GradientText } from './GradientText';
import Buttons from './TwoAppButtons';

const Container = styled.div`
  margin-bottom: 60px;
  ${breakpoint('tablet')`
    width: 960px;
    margin: 0 auto 120px;
  `};
  ${breakpoint('desktop')`
    width: 1152px;
  `};
`;

const InnerContainer = styled.div`
  padding: 0 24px;
  ${breakpoint('tablet')`
    display: flex;
    padding: 0;
  `};
`;

const Column = styled.div`
  margin-bottom: 36px;
  ${breakpoint('tablet')`
    flex: 0 0 50%;
    padding-right: 48px;
  `};
`;

const Heading = styled.div`
  font-family: ${variables.fontPrimary};
  font-size: ${variables.fontSizeLarger};
  font-weight: ${variables.fontWeightBold};
  letter-spacing: -0.5px;
  line-height: 1.1;
  margin-bottom: 12px;
  ${breakpoint('tablet')`
    font-size: ${variables.fontSizeLargest};
    margin-bottom: 24px;
    letter-spacing: -1px;
  `};
`;

const Body = styled.div`
  font-family: ${variables.fontSecondary};
  color: ${variables.colorNeutralDark};
  p {
    margin-bottom: 12px;
    ${breakpoint('tablet')`
      font-size: ${variables.fontSizeMedium};
    `};
  }
`;


export const VisionMission = () => (
  <Container>
    <InnerContainer>
      <Column>
        <Heading>
          <GradientText>Vision</GradientText>
        </Heading>
        <Body>
          <p>To build an open financial world.</p>
          <Buttons />
        </Body>
      </Column>
      <Column>
        <Heading>
          <GradientText>Our mission</GradientText>
        </Heading>
        <Body>
          <p>
            To aggregate all financial services in one sophisticated platform,
            enabling payments, transfers, and investments worldwide.
          </p>
          <p>
            Change is set to simplify and modernise mobile finance, focusing on
            security, efficiency, and equal access to opportunities.
          </p>
        </Body>
      </Column>
    </InnerContainer>
  </Container>
);

export default VisionMission;
