// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { GradientText } from './GradientText';
import logoBibox from './img/exchanges/bibox.png';

import logoKuCoin from './img/exchanges/kucoin.png';
import logoOkex from './img/exchanges/okex.png';

import LogoStrip from './LogoStrip';

import variables from '../ui/variables';

const Container = styled.div`
  margin-bottom: 1px;
  padding: 36px 0 0;
  background: ${variables.colorNeutralLightest};
  ${breakpoint('tablet')`
    margin-top: 96px;
    padding: 60px 0 30px;
  `};
  ${breakpoint('desktop')`
  `};
`;

const InnerContainer = styled.div`
  padding: 0 24px;
  ${breakpoint('tablet')`
    width: 960px;
    margin: 0 auto;
    padding: 0;
  `};
  ${breakpoint('desktop')`
    width: 1152px;
  `};
`;

const Columns = styled.div`
  ${breakpoint('tablet')`
    display: flex;
  `};
  ${breakpoint('desktop')`
  `};
`;

const Column = styled.div`
  ${breakpoint('tablet')`
    flex: 0 0 50%;
    padding-right: 48px;
  `};
  ${breakpoint('desktop')`
  `};
`;

const Heading = styled.div`
  font-family: ${variables.fontPrimary};
  font-size: ${variables.fontSizeLarger};
  font-weight: ${variables.fontWeightBold};
  margin-bottom: 12px;
  letter-spacing: -0.5px;
  ${breakpoint('tablet')`
    font-size: ${variables.fontSizeLargest};
    margin-bottom: 24px;
    letter-spacing: -1px;
  `};
`;

const Body = styled.div`
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

const ExchangesHeading = styled.div`
  font-family: ${variables.fontSecondary};
  font-size: ${variables.fontSizeMedium};
  color: ${variables.colorNeutralDark};
  text-align: center;
  margin-top: 36px;
  ${breakpoint('tablet')`
    margin-top: 48px;
  `};
`;

export const Token = () => (
  <Container>
    <InnerContainer>
      <Heading>
        <GradientText>Change Token</GradientText>
      </Heading>
      <Columns>
        <Column>
          <Body>
            <p>
              More than just a company, Change is a movement of people who will
              not settle for how banks currently operate.
            </p>
          </Body>
        </Column>
        <Column>
          <Body>
            <p>
              A limited supply of 79 million tokens exist in the world, traded
              publicly everyday.
            </p>
          </Body>
        </Column>
      </Columns>

      <ExchangesHeading>Start trading at</ExchangesHeading>

      <LogoStrip
        items={[
          { name: 'KuCoin', image: logoKuCoin, link: 'https://kucoin.com/' },
          { name: 'Bibox', image: logoBibox, link: 'https://www.bibox.com/' },
          { name: 'Okex', image: logoOkex, link: 'https://www.okex.com/' },
        ]}
      />
    </InnerContainer>
  </Container>
);

export default Token;
