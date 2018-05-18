// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import Waypoint from 'react-waypoint';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import GradientText from './GradientText';

import ScrollToTarget from './ScrollToTarget';
import { Button } from './ui';

import variables from '../ui/variables';

const Container = styled.div`
  margin-bottom: 96px;
  ${breakpoint('tablet')`
    margin-bottom: 240px;
  `};
`;

const InnerContainer = styled.div`
  padding: 0 24px;
  ${breakpoint('tablet')`
    width: 960px;
    margin: 0 auto;
    padding-right: 480px;
    text-align: right;
  `};
  ${breakpoint('desktop')`
    width: 1152px;
    padding-right: 576px;
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
    padding-left: 15%;
  `};
`;

const Body = styled.div`
  color: ${variables.colorNeutral};
  font-family: ${variables.fontSecondary};
  line-height: 1.4;
  margin-bottom: 24px;
  ${breakpoint('tablet')`
    font-size: ${variables.fontSizeLarger};
    margin-bottom: 36px;
    padding-left: 25%;
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
  isVisible: boolean,
};

class Wallet extends React.Component<Props, State> {
  state = {
    isVisible: true,
  };

  handleWaypointEnter = () => {
    this.setState({ isVisible: true });
  };

  handleWaypointLeave = () => {
    this.setState({ isVisible: false });
  };

  render() {
    return (
      <ScrollToTarget hash="#wallet" pos="center">
        <Waypoint
          onEnter={this.handleWaypointEnter}
          onLeave={this.handleWaypointLeave}
          topOffset="5%"
          bottomOffset="20%"
        >
          <Container>
            <Transition in={this.state.isVisible} timeout={2000}>
              {state => (
                <InnerContainer>
                  <FadeTransition state={state} delay={0}>
                    <Highlight>
                      <GradientText>Available for sign up</GradientText>
                    </Highlight>
                  </FadeTransition>
                  <FadeTransition state={state} delay={150}>
                    <Heading>A sophisticated mobile wallet</Heading>
                  </FadeTransition>
                  <FadeTransition state={state} delay={300}>
                    <Body>
                      Safe and easy way to store, exchange, and keep track of
                      traditional and virtual currencies.
                    </Body>
                  </FadeTransition>
                  <FadeTransition state={state} delay={450}>
                    <Link to="/app">
                      <Button color="gradient">Order free card</Button>
                    </Link>
                  </FadeTransition>
                </InnerContainer>
              )}
            </Transition>
          </Container>
        </Waypoint>
      </ScrollToTarget>
    );
  }
}

export default Wallet;
