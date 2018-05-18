// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import variables from '../ui/variables';

const Container = styled.span`
  position: relative;
  ${breakpoint('tablet')`

  `};
`;

const Asterisk = styled.span`
  color: ${variables.colorBlue};
  cursor: pointer;
  ${breakpoint('tablet')`
    &:hover {
      color: ${variables.colorBlueDark};
    }
  `};
`;

const Body = styled.span`
  color: ${variables.colorNeutralDark};
  font-size: ${variables.fontSizeSmall};
  display: none;
  position: absolute;
  width: 192px;
  bottom: 100%;
  right: 0;
  transform: translateX(10%);
  z-index: ${variables.zIndexDisclaimer};
  padding: 12px 18px;
  background: ${variables.colorNeutralLightest};
  box-shadow: ${variables.boxShadowNeutralSmall};
  ${props =>
    props.isVisible &&
    `
    display: block;
    `} ${breakpoint('tablet')`
    width: 240px;
    left: 0;
    right: auto;
    transform: translateX(-25%);
  `};
`;

type Props = {
  children: any,
};

type State = {
  isVisible: boolean,
};

class Disclaimer extends React.Component<Props, State> {
  state = {
    isVisible: false,
  };

  toggle = this.toggle.bind(this);

  toggle() {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  }

  render() {
    return (
      <Container onClick={this.toggle}>
        <Asterisk>*</Asterisk>
        <Body isVisible={this.state.isVisible}>{this.props.children}</Body>
      </Container>
    );
  }
}

export default Disclaimer;
