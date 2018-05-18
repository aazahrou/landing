// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import variables from '../ui/variables';

const Container = styled.div`
  width: 288px;
  height: 586px;
  margin: 0 auto;
  background: linear-gradient(
    to bottom,
    ${variables.colorNeutralLightest},
    ${variables.colorNeutralLighter}
  );
  border-radius: 30px;
  box-shadow: ${variables.boxShadowNeutralLarge};
  ${breakpoint('tablet')`
    width: 360px;
    height: 740px;
    padding: 2px;
  `};
`;

const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 28px;
  background: ${variables.colorWhite};
  padding: 70px 18px;
  ${breakpoint('tablet')`
    padding: 83px 18px 84px;
  `};
`;

const Screen = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid ${variables.colorNeutralLightest};
`;

const Image = styled.img`
  width: 100%;
`;

const Speaker = styled.div`
  position: absolute;
  top: 34px;
  left: 50%;
  width: 48px;
  height: 2px;
  background: ${variables.colorNeutralLightest};
  border-radius: 999px;
  transform: translateX(-50%);
  ${breakpoint('tablet')`
    top: 39px;
    width: 60px;
    height: 6px;
  `};
`;

const HomeButton = styled.div`
  position: absolute;
  bottom: 12px;
  left: 50%;
  width: 48px;
  height: 48px;
  padding: 2px;
  background: linear-gradient(
    to top,
    ${variables.colorNeutralLightest},
    ${variables.colorNeutralLighter}
  );
  border-radius: 999px;
  transform: translateX(-50%);
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 999px;
    background: ${variables.colorWhite};
  }
  ${breakpoint('tablet')`
    width: 60px;
    height: 60px;
  `};
`;

type Props = {
  image?: string,
};

export const Mobile = (props: Props) => (
  <Container>
    <InnerContainer>
      <Speaker />
      <Screen>{props.image && <Image src={props.image} alt="" />}</Screen>
      <HomeButton />
    </InnerContainer>
  </Container>
);

export default Mobile;
