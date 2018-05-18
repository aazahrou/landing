// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import IntercomBubble from './IntercomBubble';
import variables from '../ui/variables';

import background from './img/background-careers.jpg';

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
    padding: 244px 0 36px;
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
    /* transform: translateX(-50%); */
  `};
`;

const BackgroundImage = styled.img`
  ${breakpoint('tablet')`
    width: 100%;
  `};
`;

export const Careers = class Careers extends React.Component<{}> {
  componentWillMount() {
    const leverCore = document.createElement('script');
    leverCore.src = 'https://andreasmb.github.io/lever-jobs-embed/index.js';
    leverCore.async = true;

    if (document.body) {
      document.body.appendChild(leverCore);
    }
    const leverJobs = document.createElement('script');
    leverJobs.type = 'text/javascript';
    leverJobs.text =
      "window.leverJobsOptions = {accountName: 'getchange', includeCss: true};";

    if (document.body) {
      document.body.appendChild(leverJobs);
    }
  }

  render() {
    return (
      <Container>
        <InnerContainer>
          <Intro>
            <IntroHeading>
              Join us and help us create the financial institution of the
              future.
            </IntroHeading>
            <IntroBody>
              <p>
                Change is a leading proposition in the Fintech sphere, using
                blockchain technology to reinvent banking and offer a all-in-one
                proposition for finance. Not only disruptive in the fintech
                sphere, Change is set to create a revolution in the entire
                financial sector.
              </p>
              <p>
                Change has thousands of supporters, and is backed by DHL’s
                former CEO Roger Crook, alongside other industry leaders.
              </p>
            </IntroBody>
            <Background>
              <BackgroundImage src={background} alt="" />
            </Background>
          </Intro>

          <div id="lever-jobs-container" />
        </InnerContainer>
        <IntercomBubble />
      </Container>
    );
  }
};

export default Careers;
