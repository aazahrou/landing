// @flow
import React from 'react';
import { Transition } from 'react-transition-group';
import Waypoint from 'react-waypoint';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import GradientText from './GradientText';

import photo from './img/photo-landing-marketplace.jpg';
import MarketplaceVisual from './MarketplaceVisual';

import ScrollToTarget from './ScrollToTarget';

import variables from '../ui/variables';

const Container = styled.div`
  margin-bottom: -96px;
  ${breakpoint('tablet')`
    margin-bottom: 480px;
  `};
`;

const InnerContainer = styled.div`
  position: relative;
  ${breakpoint('tablet')`
    width: 960px;
    margin: 0 auto;
  `};
  ${breakpoint('desktop')`
  `};
`;

const TextContainer = styled.div`
  margin-bottom: 60px;
  padding: 0 24px;
  ${breakpoint('tablet')`
    text-align: left;
    padding: 0;
    padding-right: 480px;
    margin: 0;
  `};
  ${breakpoint('desktop')`
    padding-right: 576px;
  `};
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

const Heading = styled.div`
  font-family: ${variables.fontPrimary};
  font-weight: ${variables.fontWeightBold};
  font-size: ${variables.fontSizeLargest};
  line-height: 1;
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

const ImageTransition = styled.div`
  opacity: 0;
  transform: translateX(100%) translateX(0);
  transition: transform 0.9s, opacity 0.6s;
  ${breakpoint('tablet')`
    transform: translateX(0) translateY(-100%);
    ${props =>
      (props.state === 'entering' || props.state === 'entered') &&
      `
        transform: translateX(0) translateY(0);
    `};
  `};
  ${props =>
    (props.state === 'entering' || props.state === 'entered') &&
    `
    opacity: 1;
    transform: translateX(0) translateY(0);
  `};
`;

const ImageContainer = styled.div`
  margin-bottom: 36px;
  ${breakpoint('tablet')`
    overflow: hidden;
    width: 100%;
    height: 360px;
    margin-bottom: 120px;
  `};
  ${breakpoint('tablet')`
    height: 480px;
  `};
`;

const Image = styled.img`
  width: 100%;
  ${breakpoint('tablet')`
  `};
`;

const VisualContainer = styled.div`
  ${breakpoint('tablet')`
    position: absolute;
    right: 60px;
    top: 326px;
    z-index: ${variables.zIndexMarketplaceVisualContainer};
  `};
  ${breakpoint('tablet')`
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
  isImageVisible: boolean,
  isTextVisible: boolean,
};

class Marketplace extends React.Component<Props, State> {
  state = {
    isImageVisible: false,
    isTextVisible: false,
  };

  handleImageEnter = () => {
    this.setState({ isImageVisible: true });
  };

  handleImageLeave = () => {
    this.setState({ isImageVisible: false });
  };

  handleTextEnter = () => {
    this.setState({ isTextVisible: true });
  };

  handleTextLeave = () => {
    this.setState({ isTextVisible: false });
  };

  render() {
    return (
      <ScrollToTarget hash="#marketplace" pos="center">
        <Container>
          <InnerContainer>
            <Waypoint
              onEnter={this.handleImageEnter}
              onLeave={this.handleImageLeave}
              topOffset="5%"
              bottomOffset="20%"
            >
              <ImageContainer>
                <Transition in={this.state.isImageVisible} timeout={2000}>
                  {state => (
                    <div>
                      <ImageTransition state={state}>
                        <Image src={photo} alt="" />
                      </ImageTransition>
                    </div>
                  )}
                </Transition>
              </ImageContainer>
            </Waypoint>
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
                          <GradientText />
                        </Highlight>
                      </FadeTransition>
                      <FadeTransition state={state} delay={150}>
                        <Heading>Finance marketplace</Heading>
                      </FadeTransition>
                      <FadeTransition state={state} delay={300}>
                        <Body>
                          In the future, you’ll be able to access a multitude of
                          investing opportunities, all in one app.
                        </Body>
                      </FadeTransition>
                    </div>
                  )}
                </Transition>
              </TextContainer>
            </Waypoint>
            <VisualContainer>
              <MarketplaceVisual />
            </VisualContainer>
          </InnerContainer>
        </Container>
      </ScrollToTarget>
    );
  }
}

export default Marketplace;
