// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Link } from 'react-router-dom';

import variables from '../ui/variables';

import svgDown from './img/icon-down.svg';

type Props = {
  children: ?any,
  isHidden: boolean,
  to: string,
};

const ArrowLink = ({ isHidden, ...props }: Props) => (
  <Link {...props}>{props.children}</Link>
);

const Arrow = styled(ArrowLink)`
  width: 60px;
  height: 60px;
  position: fixed;
  left: 50%;
  bottom: 24px;
  z-index: ${variables.zIndexArrow};
  margin-left: -24px;
  background: url(${svgDown});
  background-size: 28px 28px;
  background-position: center 18px;
  background-repeat: no-repeat;
  background-color: ${variables.colorBlue};
  border-radius: 9999px;
  box-shadow: ${variables.boxShadowNeutralSmall};
  transition: all 0.3s;
  cursor: pointer;
  ${props =>
    props.isHidden &&
    `
    opacity: 0;
    pointer-events: none;
    `} ${breakpoint('tablet')`
    display: none;
  `};
`;

export default Arrow;
