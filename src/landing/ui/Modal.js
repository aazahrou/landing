// @flow
import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import variables from '../../ui/variables';

import svgClose from '../img/icon-close.svg';

const Container = styled.div`
  position: relative;
  z-index: ${variables.zIndexModal};
  width: 85%;
  padding: 72px 0 0;
  margin: 0 auto;
  &:focus {
    outline: none;
  }
  ${breakpoint('tablet')`
    width: 768px;
  `};
`;

const InnerContainer = styled.div`
  position: relative;
  /* background: ${variables.colorWhite}; */
  .ReactModal__video {
    height: 0;
    padding-top: 56.25%;
  }
  iframe {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
`;

const Close = styled.button`
  position: absolute;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -18px;
  right: -18px;
  width: 36px;
  height: 36px;
  background: ${variables.colorWhite};
  border: 0;
  border-radius: 50%;
  box-shadow: ${variables.boxShadowNeutralSmall};
  cursor: pointer;
`;

const Body = styled.div``;

const CloseImage = styled.img`
  width: 15px;
  height: 15px;
`;

const styles = {
  overlay: {
    display: 'flex',
    overflow: 'scroll',
    position: 'fixed',
    alignItems: 'top',
    justifyContent: 'center',
    zIndex: variables.zIndexModalOverlay,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    padding: '0',
    background: `rgba(${variables.colorNeutralDark}, .8)`,
  },
  content: {
    overflow: 'visible',
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: variables.zIndexModal,
    width: '100%',
    height: '100%',
    padding: 0,
    border: 0,
    borderRadius: 0,
    background: 'transparent',
    outline: 'none',
    WebkitOverflowScrolling: 'touch',
  },
};

type Props = {
  children: ?any,
  isOpen: boolean,
  closeModal: Function,
};

class Modal extends React.Component<Props> {
  render() {
    return (
      <ReactModal isOpen={this.props.isOpen} contentLabel="" style={styles}>
        <Container>
          <InnerContainer>
            <Close onClick={this.props.closeModal}>
              <CloseImage src={svgClose} alt="" />
            </Close>

            <Body>{this.props.children}</Body>
          </InnerContainer>
        </Container>
      </ReactModal>
    );
  }
}

export default Modal;
