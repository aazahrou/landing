// @flow
import React from 'react';
import { Transition } from 'react-transition-group';
import Waypoint from 'react-waypoint';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import GradientText from './GradientText';

import photo from './img/background-security-token-offering.jpg';

import ScrollToTarget from './ScrollToTarget';
import { Button } from './ui';

import variables from '../ui/variables';

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

const TextContainer = styled.div`
  padding: 0 24px;
  text-align: center;
  ${breakpoint('tablet')`
    text-align: left;
    padding: 0;
    max-width: 600px;
    margin: 110px auto;
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
  font-weight: ${variables.fontWeightBold};
  font-size: ${variables.fontSizeLargest};
  line-height: 1.2;
  margin-bottom: 24px;
  ${breakpoint('tablet')`
    font-size: ${variables.fontSizeHuge};
    letter-spacing: -1px;
  `};
`;

const Body = styled.div`
  color: ${variables.colorNeutral};
  font-family: ${variables.fontSecondary};
  line-height: 1.5;
  margin-bottom: 24px;
  ${breakpoint('tablet')`
    font-size: ${variables.fontSizeLarger};
    line-height: 1.4;
    margin-bottom: 36px;
  `};
`;

const Small = styled.div`
  color: ${variables.colorNeutral};
  font-family: ${variables.fontSecondary};
  line-height: 1.5;
  font-size: ${variables.fontSizeSmall};  
  margin-top: 40px;
`;

const Highlight = styled.div`
  font-family: ${variables.fontPrimary};
  font-size: ${variables.fontSizeLarge};
  font-weight: ${variables.fontWeightBold};
  line-height: 1.2;
  margin-bottom: 12px;
  ${breakpoint('tablet')`
    font-size: ${variables.fontSizeLarger};
    margin-bottom: 24px;
  `};
`;

const Image = styled.img`
  justify-content: center;
  width: 300px;
  display: none;
  margin-left: 150px;
  ${breakpoint('tablet')`
    display: initial;
  `};  
`;

const FadeTransition = styled.div`
  opacity: 0;
  transition: all 0.9s;
  ${props => props.delay && `transition-delay: ${props.delay}ms`};
  ${props =>
  (props.state === 'entering' || props.state === 'entered') &&
  `
    opacity: 1;
  `};
`;

type Props = {};

type State = {
  isCardVisible: boolean,
  isTextVisible: boolean,
};

export class Securities extends React.Component<Props, State> {
  state = {
    isCardVisible: false,
    isTextVisible: false,
  };

  handleCardEnter = () => {
    this.setState({isCardVisible: true});
  };

  handleCardLeave = () => {
    this.setState({isCardVisible: false});
  };

  handleTextEnter = () => {
    this.setState({isTextVisible: true});
  };

  handleTextLeave = () => {
    this.setState({isTextVisible: false});
  };

  render() {
    return (
      <ScrollToTarget hash="#equity-tokens" pos="center">
        <Container>
        <InnerContainer>
          <Column>
            <Body>
            <InnerContainer>
              <Waypoint
                onEnter={this.handleTextEnter}
                onLeave={this.handleTextLeave}
                topOffset="5%"
                bottomOffset="20%"
              >
                <TextContainer>
                  <Transition in={this.state.isTextVisible} timeout={2000}>
                    {state => (
                      <div>
                        <FadeTransition state={state} delay={0}>
                          <Highlight>
                            <GradientText>Coming soon</GradientText>
                          </Highlight>
                        </FadeTransition>
                        <FadeTransition state={state} delay={150}>
                          <Heading>Invest in Equity Tokens*</Heading>
                        </FadeTransition>
                        <FadeTransition state={state} delay={300}>
                          <Body>
                          Change will let you invest in companies and funds via equity tokens*,
                          which contractually represent the ownership of the company.
                          </Body>
                        </FadeTransition>
                        <FadeTransition state={state} delay={450}>
                          <a href="/security-token-offering">
                            <Button color="gradient">Sign up as a company</Button>
                          </a>
                          <Small>
                            * Investors will hold a tokenized loan contract of the SPV
                            which owns the equity of the respective project company.
                          </Small>
                        </FadeTransition>
                      </div>
                    )}
                  </Transition>
                </TextContainer>
              </Waypoint>
            </InnerContainer>
            </Body>
          </Column>
          <Column>
            <Image src={photo} alt=""/>
          </Column>
        </InnerContainer>
      </Container>
      </ScrollToTarget>
    );
  }
};
