// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Buttons from './TwoAppButtons';

import variables from '../ui/variables';

const Container = styled.div`
  position: relative;
  margin-top: 100px;
  margin-bottom: 1px;
  padding-bottom: 48px;
  background: ${variables.colorNeutralLightest};
  ${breakpoint('tablet')`
    padding: 96px 0 96px;
  `};
`;

const InnerContainer = styled.div`
  text-align: center;
  line-height: 1;
  padding-top: 50px;
  ${breakpoint('tablet')`
    width: 600px;
    margin: 0 auto;
  `};
`;

const TextContainer = styled.div`
  padding: 0 24px;
  ${breakpoint('tablet')`
    text-align: center;
    margin-bottom: 0;
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
    p {
      font-size: ${variables.fontSizeLarger}
    }
  `};
  a {
    color: ${variables.colorBlue};
    font-size: ${variables.fontSizeNormal};
    margin-left: 12px;
    &:hover {
      color: ${variables.colorBlueDark};
      text-decoration: none;
    }
  }
  p {
    margin-bottom: 12px;
  }
`;

type Props = {};

type State = {
  isModalOpen: boolean,
};

class CreateYourAccount extends React.Component<Props, State> {
  state = {
    isModalOpen: false,
  };

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  handleClick() {
    this.setState({ isModalOpen: true });
  }

  render() {
    return (
      <Container>
        <InnerContainer>
          <TextContainer>
            <Heading>Create your free account in 5 minutes</Heading>
            <Body>
              <p>
                Open your Change account from your smartphone, free of charge.
                Our customer support team is available to assist you.
              </p>
            </Body>
            <Buttons />
          </TextContainer>
        </InnerContainer>
      </Container>
    );
  }
}

export default CreateYourAccount;
