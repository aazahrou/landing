// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import variables from '../ui/variables';

import { Modal, NavButton } from './ui';

import photo from './img/photo-landing-global-movement.jpg';
// import svgPlay from './img/icon-play.svg';

const Container = styled.div`
  position: relative;
  margin-bottom: 1px;
  padding-bottom: 48px;
  background: ${variables.colorNeutralLightest};
  ${breakpoint('tablet')`
    padding: 96px 0 96px;
  `};
`;

const InnerContainer = styled.div`
  ${breakpoint('tablet')`
    width: 960px;
    margin: 0 auto;
  `};
  ${breakpoint('desktop')`
  `};
`;

const TextContainer = styled.div`
  padding: 0 24px;
  ${breakpoint('tablet')`
    padding-left: 480px;
    text-align: left;
    margin-bottom: 0;
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

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 36px;
  ${breakpoint('tablet')`
    overflow: hidden;
    position: absolute;
    left: calc(50% - 480px);
    top: -96px;
    width: 320px;
    height: 480px;
    margin: 0;
    background: ${variables.colorNeutralLightest};
    cursor: pointer;
    &:hover {
      img {
        opacity: .9;
      }
    }
  `};
`;

const Image = styled.img`
  display: block;
  width: 100%;
  ${breakpoint('tablet')`
    width: auto;
    height: 100%;
  `};
`;

// const Play = styled.img`
//   display: block;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   width: 48px;
//   height: 48px;
//   margin-left: -24px;
//   margin-top: -24px;
// `;

type Props = {};

type State = {
  isModalOpen: boolean,
};

class GlobalMovement extends React.Component<Props, State> {
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
          <ImageContainer>
            {' '}
            {/* onClick={this.handleClick.bind(this)}> */}
            <Image src={photo} alt="" />
            {/* <Play src={svgPlay} alt="" /> */}
          </ImageContainer>
          <TextContainer>
            <Heading>A global movement</Heading>
            <Body>
              <p>
                In 2017, over 5600 individuals got together to demand a better
                alternative to current banking.
              </p>
              <p>
                Change is set to build a more exciting mobile finance
                application that includes cryptocurrencies and an investment
                marketplace.
              </p>
            </Body>
            <NavButton to="/about" color="gradient">
              Learn more
            </NavButton>
          </TextContainer>
        </InnerContainer>

        <Modal
          isOpen={this.state.isModalOpen}
          closeModal={this.closeModal.bind(this)}
        >
          <div className="ReactModal__video">
            <iframe
              title="YouTube"
              src="https://www.youtube.com/embed/t2k38bMuc7k/?rel=0&amp;showinfo=0&amp;autoplay=1"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </Modal>
      </Container>
    );
  }
}

export default GlobalMovement;
