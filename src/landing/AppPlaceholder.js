// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import IntercomBubble from './IntercomBubble';
import variables from '../ui/variables';
import photo from './img/app-placeholder.png';
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
  padding: 96px 24px 24px;
  display: flex;
  flex-direction: column;
  ${breakpoint('tablet')`
    flex-direction: row;
    width: 960px;
    margin: 0 auto;
  `};
  ${breakpoint('desktop')`
    flex-direction: rowx;
    width: 1152px;
  `};
`;


const Column = styled.div`
  margin-bottom: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${breakpoint('tablet')`
    flex: 0 0 50%;
    padding-right: 48px;
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


const Image = styled.img`
  justify-content: center;
  width: 450px;
  ${breakpoint('tablet')`
    display: initial;
  `};  
`;

const StyledButtonWrapper = styled.div`
  margin: 0
`;

export const AppPlaceholder = class AppPlaceholder extends React.Component<{}> {

  render() {
    return (
      <Container>
        <InnerContainer>
          <Column>
              <IntroHeading>
                Download the mobile app
              </IntroHeading>
              <StyledButtonWrapper>
                <Buttons />
              </StyledButtonWrapper>
          </Column>
          <Column>
            <Image src={photo} alt=""/>
          </Column>
        </InnerContainer>
        <IntercomBubble />
      </Container>
    );
  }
};

export default AppPlaceholder;
