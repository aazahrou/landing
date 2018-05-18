// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import variables from '../ui/variables';

const Container = styled.div`
  color: ${variables.colorWhite};
  width: 230px;
  height: 230px;
  position: relative;
  padding: 24px 24px;
  background: ${props => (props.color ? props.color : null)};
  ${breakpoint('tablet')`
    width: 288px;
    height: 288px;
  `};
`;

const Title = styled.div`
  font-family: ${variables.fontSecondary};
  font-size: ${variables.fontSizeLarger};
  line-height: 1.1;
  margin-bottom: 9px;
`;

const Description = styled.div`
  font-family: ${variables.fontSecondary};
  line-height: 1.4;
`;

const Icon = styled.div`
  position: absolute;
  bottom: 24px;
  right: 24px;
  height: 72px;
  ${breakpoint('tablet')`
    bottom: 30px;
    right: 30px;
    height: 96px;
  `};
`;

const IconImage = styled.img`
  height: 100%;
`;

type Props = {
  title: string,
  description: string,
  icon: string,
  color?: string,
};

export const MarketplaceCard = (props: Props) => (
  <Container color={props.color}>
    <Title>{props.title}</Title>
    <Description>{props.description}</Description>
    <Icon>
      <IconImage src={props.icon} />
    </Icon>
  </Container>
);

export default MarketplaceCard;
