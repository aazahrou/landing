// @flow
import React from 'react';
import { Transition } from 'react-transition-group';
import Waypoint from 'react-waypoint';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import ScrollToTarget from './ScrollToTarget';
import variables from '../ui/variables';

const Container = styled.div`
  margin-bottom: 48px;
  ${breakpoint('tablet')`
    margin-bottom: 96px;
  `};
`;

const InnerContainer = styled.div`
  text-align: center;
  padding: 0 24px;
  ${breakpoint('tablet')`
    width: 600px;
    margin: 0 auto;
    text-align: center;
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
  line-height: 1.4;
  margin-bottom: 24px;
  ${breakpoint('tablet')`
    font-size: ${variables.fontSizeLarger};
    margin-bottom: 36px;
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
      <ScrollToTarget hash="#pricing" pos="center">
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
                  <FadeTransition state={state} delay={150}>
                    <Heading>Pricing</Heading>
                  </FadeTransition>
                  <FadeTransition state={state} delay={300}>
                    <Body>
                      Change charges zero commission fees. A subscription plan
                      will be introduced in the future for active traders. Below
                      is a fee comparison for European customers.
                    </Body>
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
