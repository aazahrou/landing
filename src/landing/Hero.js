// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Transition } from 'react-transition-group';

import variables from '../ui/variables';

import GradientText from './GradientText';
import MobileDevice from './MobileDevice';
import HeroWords from './HeroWords';

import screenshot from './img/screenshot.png';
import background from './img/background-home.jpg';

const Container = styled.div`
  text-align: center;
  position: relative;
  height: 100vh;
  overflow: hidden;
  margin-bottom: 60px;
  padding: 72px 0;
  ${breakpoint('tablet')`
    height: 1302px;
    padding: 144px 96px;
    margin: 0;
  `};
`;

const InnerContainer = styled.div`
  padding: 30px 24px;
  ${breakpoint('tablet')`
    padding: 0;
  `};
`;

const WordsTransition = styled.div`
  opacity: 0;
  transition: all 0.6s;
  ${props =>
    (props.state === 'entering' || props.state === 'entered') &&
    `
    opacity: 1;
  `};
`;

const WordsHeading = styled.div`
  font-family: ${variables.fontSecondary};
  font-size: ${variables.fontSizeMedium};
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
  top: 240px;
  z-index: ${variables.zIndexHeroDevice};
  width: 100%;
  ${breakpoint('tablet')`
    display: block;
    top: 420px;
    left: 50%;
    transform: translateX(-50%);
  `};
`;

const BackgroundTransition = styled.div`
  opacity: 0;
  transition: all 1.2s;
  ${props =>
    (props.state === 'entering' || props.state === 'entered') &&
    `
    opacity: 1;
  `};
`;

const Background = styled.div`
  position: absolute;
  top: -174px;
  left: 50%;
  z-index: ${variables.zIndexHeroBackground};
  width: 640px;
  height: 640px;
  transform: translateX(-50%);
  pointer-events: none;
  ${breakpoint('tablet')`
    top: -720px;
    width: 1680px;
    height: 1680px;
  `};
`;

const BackgroundImage = styled.img`
  width: 100%;
  ${breakpoint('tablet')`
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
                  <GradientText>Change the way you</GradientText>
                </WordsHeading>
                <HeroWords words={['invest', 'pay', 'insure', 'live']} />
              </WordsTransition>
            )}
          </Transition>
          <DeviceContainer>
            <Transition in={this.state.deviceVisible} timeout={600}>
              {state => (
                <DeviceTransition state={state}>
                  <MobileDevice image={screenshot} />
                </DeviceTransition>
              )}
            </Transition>
          </DeviceContainer>
          <Transition in={this.state.backgroundVisible} timeout={600}>
            {state => (
              <BackgroundTransition state={state}>
                <Background>
                  <BackgroundImage src={background} alt="" />
                </Background>
              </BackgroundTransition>
            )}
          </Transition>
        </InnerContainer>
      </Container>
    );
  }
}

export default Hero;
