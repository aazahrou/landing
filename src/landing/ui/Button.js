// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Link } from 'react-router-dom';

import variables from '../../ui/variables';

function getColor(color) {
  switch (color) {
    default:
      return variables.colorWhite;
  }
}

function getBackground(color) {
  switch (color) {
    case 'green':
      return variables.colorGreen;
    case 'blue':
      return variables.colorBlue;
    case 'gradient':
      return `linear-gradient(to right, ${variables.colorGreenLight}, ${
        variables.colorBlue
      })`;
    default:
      return variables.colorNeutral;
  }
}

function getBackgroundHover(color) {
  switch (color) {
    default:
      return getBackground(color);
  }
}

function getShadow(color) {
  switch (color) {
    case 'gradient':
      return variables.boxShadowGreenSmall;
    default:
      return variables.boxShadowNeutralSmall;
  }
}

function getPadding(size, fluid) {
  switch (size) {
    case 'small':
      return fluid ? '6px 6px' : '6px 24px';
    default:
      return fluid ? '9px 12px' : '9px 36px';
  }
}

type Props = {
  children: any,
  color: ?string,
  size: ?string,
  fluid: ?boolean,
};

const ButtonBase = ({ color, size, fluid, ...props }: Props) => (
  <button {...props}>{props.children}</button>
);

const Button = styled(ButtonBase)`
  color: ${props => getColor(props.color)};
  font-family: ${variables.fontSecondary};
  font-size: ${variables.fontSizeSmall};
  font-weight: ${variables.fontWeightBold};
  text-transform: uppercase;
  display: inline-block;
  width: ${props => (props.fluid ? '100%' : 'auto')};
  padding: ${props => getPadding(props.size, props.fluid)};
  background: ${props => getBackground(props.color)};
  border: 0;
  border-radius: 9999px;
  box-shadow: ${props => getShadow(props.color)};
  cursor: pointer;
  &:hover {
    color: ${props => getColor(props.color)};
    text-decoration: none;
  }
  ${breakpoint('tablet')`
    &:hover {
      opacity: .9;
      background: ${props => getBackgroundHover(props.color)};
    }
    &:active {
      transform: scale(.98);
    }
  `};
`;

export const AnchorButton = Button.withComponent('a');

export const NavButton = Button.withComponent(Link);

export default Button;
