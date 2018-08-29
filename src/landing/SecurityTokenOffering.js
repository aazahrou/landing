// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import IntercomBubble from './IntercomBubble';
import variables from '../ui/variables';
import { Button } from './ui';
import Disclaimer from './Disclaimer';
import background from './img/background-security-token-offering.jpg';

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  min-height: 100vh;
  background: ${variables.colorWhite};
`;

const InnerContainer = styled.div`
  padding: 96px 24px 24px;
  ${breakpoint('tablet')`
    width: 960px;
    margin: 0 auto;
  `};
  ${breakpoint('desktop')`
    width: 1152px;
  `};
`;

const Intro = styled.div`
  margin: 24px 0 48px;
  ${breakpoint('tablet')`
    width: 960px;
    margin: 0 auto;
    padding: 100px 0 36px;
    padding-right: calc(480px + 48px);
  `};
  ${breakpoint('desktop')`
    width: 1152px;
    padding-right: calc(576px + 48px);
  `};
`;

const IntroHeading = styled.div`
  font-family: ${variables.fontPrimary};
  font-weight: ${variables.fontWeightBold};
  font-size: ${variables.fontSizeLargest};
  line-height: 1.2;
  margin-bottom: 24px;
  ${breakpoint('tablet')`
    font-size: ${variables.fontSizeHuge};
    letter-spacing: -1px;
  `};
`;

const IntroBody = styled.div`
  color: ${variables.colorNeutral};
  font-family: ${variables.fontSecondary};
  line-height: 1.4;
  margin-bottom: 24px;
  ${breakpoint('tablet')`
    font-size: ${variables.fontSizeLarger};
    margin-bottom: 36px;
  `};
`;

const Background = styled.div`
  display: none;
  pointer-events: none;
  ${breakpoint('tablet')`
    padding-top: 100px;
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    z-index: ${variables.zIndexHeroBackground};
  `};
`;

const BackgroundImage = styled.img`
  ${breakpoint('tablet')`
    width: 300px;
    margin-left: 110px;
  `};
`;

const NavLink = styled.div`
  color: ${props =>
  props.color === 'blue' ? variables.colorBlue : variables.colorNeutral};
  font-size: ${variables.fontSizeLarge};
  line-height: 1.4;
  padding: 0px 0px 18px;
  ${breakpoint('tablet') `
    &:hover {
      color: ${props =>
  props.blue ? variables.colorBlueDark : variables.colorNeutralDark};
      text-decoration: none;
    }
  `};
`;

const Small = styled.div`
  color: ${variables.colorNeutral};
  font-family: ${variables.fontSecondary};
  line-height: 1.5;
  font-size: ${variables.fontSizeSmall};  
  margin-bottom: 10px;
`;

export const SecurityTokenOffering = class SecurityTokenOffering extends React.Component<{}> {
  render() {
    return (
      <Container>
        <InnerContainer>
          <Intro>
            <IntroHeading>
              Want to launch an Equity Token* Offering on Change platform?
            </IntroHeading>
            <IntroBody>
              Change will provide an Equity Token
              <Disclaimer>Investors will hold a tokenized loan contract of the SPV
              which owns the equity of the respective project company.</Disclaimer> Offering platform
              with trading functionality.
              Investors will go through KYC and AML checks.
              This facilitates source of funds verification and certainty in future banking relations.
            </IntroBody>
            <NavLink>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.google.com/presentation/d/19dyXeaX7fvCdiXp32PwIVAaKGWlujhYi5QfEh26zKm0/edit?usp=sharing"
              >
                See all the benefits.
            </a>
            </NavLink>
            <IntroBody>
              <a href="https://getchange.typeform.com/to/wR7eZA">
                <Button color="gradient">Sign up</Button>
              </a>
            </IntroBody>
            <Background>
              <BackgroundImage src={background} alt="" />
            </Background>
          </Intro>

        </InnerContainer>
        <IntercomBubble />
      </Container>
    );
  }
};
