// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Transition } from 'react-transition-group';
import variables from '../ui/variables';
import GradientText from './GradientText';

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 90px;
  z-index: ${variables.zIndexHeroWords};
  ${breakpoint('tablet')`
    height: 130px;
  `};
`;

const Word = styled.div`
  font-family: ${variables.fontPrimary};
  font-size: 80px;
  font-weight: ${variables.fontWeightBold};
  letter-spacing: -1px;
  line-height: 1;
  position: absolute;
  left: 50%;
  top: 0;
  width: 360px;
  height: 90px;
  pointer-events: none;
  transform: translateX(-50%);
  transition: all 0.6s;

  ${breakpoint('tablet')`
    font-size: ${variables.fontSizeMassive};
    height: 130px;
  `};

  ${props =>
    props.state === 'entering' &&
    `
      transform: translateX(-50%) translateY(0);
      transition-delay: .3s;
    `};
  ${props =>
    props.state === 'entered' &&
    `
      transform: translateX(-50%) translateY(0);
    `};
  ${props =>
    props.state === 'exiting' &&
    `
      transform: translateX(-50%) translateY(150%);
    `};
  ${props =>
    props.state === 'exited' &&
    `
      transform: translateX(-50%) translateY(150%);
  `};
`;

type Props = {
  words: Array<string>,
};

type State = {
  activeWord: number,
};

class HeroWords extends React.Component<Props, State> {
  intervalId: any;

  state = {
    activeWord: 0,
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      const nextWord =
        this.state.activeWord >= this.props.words.length - 1
          ? 0
          : this.state.activeWord + 1;
      this.setState({ activeWord: nextWord });
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <Container>
        {this.props.words.map((word, i) => (
          <Transition key={i} in={i === this.state.activeWord} timeout={1200}>
            {state => (
              <Word key={i} state={state}>
                <GradientText>{word}</GradientText>
              </Word>
            )}
          </Transition>
        ))}
      </Container>
    );
  }
}

export default HeroWords;
