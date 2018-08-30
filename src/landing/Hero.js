// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Transition } from 'react-transition-group';
import Buttons from './TwoAppButtons';

import variables from '../ui/variables';

import GradientText from './GradientText';
import MobileDevice from './MobileDevice';
import HeroWords from './HeroWords';

import screenshot from './img/screenshot.png';

const Container = styled.div`
  text-align: center;
  position: relative;
  height: 100vh;
  overflow: hidden;
  margin-bottom: 60px;
  padding: 50px 0;
  ${breakpoint('tablet')`
    height: 1500px;
    padding: 144px 96px;
    margin: 0;
  `};
  @media only screen and (max-device-width: 480px){
    padding-bottom: 750px;
  }
`;

const InnerContainer = styled.div`
  padding: 100px 24px;
  ${breakpoint('tablet')`
    padding: 0;
  `};
`;

const WordsTransition = styled.div`
  opacity: 0;
  transition: all 0.6s;
  margin-bottom: 40px;

  ${props =>
    (props.state === 'entering' || props.state === 'entered') &&
    `
    opacity: 1;
  `};
`;

const WordsHeading = styled.div`
  font-family: ${variables.fontSecondary};
  font-size: ${variables.fontSizeLarge};
  line-height: 1;
  position: relative;
  z-index: ${variables.zIndexHeroWords};
  margin-bottom: 9px;
  ${breakpoint('tablet')`
    font-size: ${variables.fontSizeLarge};
  `};
`;

const DeviceTransition = styled.div`
  transform: translateY(120px);
  opacity: 0;
  transition: all 0.9s;
  ${props =>
    (props.state === 'entering' || props.state === 'entered') &&
    `
    transform: translateY(0);
    opacity: 1;
  `};
`;

const DeviceContainer = styled.div`
  position: absolute;
  left: 0;
  top: 400px;
  z-index: ${variables.zIndexHeroDevice};
  width: 100%;
  ${breakpoint('tablet')`
    display: block;
    top: 600px;
    left: 50%;
    transform: translateX(-50%);
  `};
`;

type Props = {};

type State = {
  wordsVisible: boolean,
  deviceVisible: boolean,
  backgroundVisible: boolean,
};

class Hero extends React.Component<Props, State> {
  state = {
    wordsVisible: false,
    deviceVisible: false,
    backgroundVisible: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        wordsVisible: true,
        deviceVisible: true,
      });
    }, 150);

    setTimeout(() => {
      this.setState({
        backgroundVisible: true,
      });
    }, 900);
  }

  render() {
    return (
      <Container>
        <InnerContainer>
          <Transition in={this.state.wordsVisible} timeout={600}>
            {state => (
              <WordsTransition state={state}>
                <WordsHeading>
                  <GradientText>Buy and Trade Commission-free:</GradientText>
                </WordsHeading>
                <HeroWords words={['bitcoin', 'ether', 'litecoin', 'ripple']} />
              </WordsTransition>
            )}
          </Transition>
          <Buttons />
          <DeviceContainer>
            <Transition in={this.state.deviceVisible} timeout={600}>
              {state => (
                <DeviceTransition state={state}>
                  <MobileDevice image={screenshot} />
                </DeviceTransition>
              )}
            </Transition>
          </DeviceContainer>
        </InnerContainer>
      </Container>
    );
  }
}

export default Hero;
