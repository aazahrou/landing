// @flow
import React from 'react';
import styled from 'styled-components';
import variables from './variables';

type Props = {
  center: boolean,
  small: boolean,
  children: any,
};

const H1 = ({ center, ...props }: Props) => (
  <h1 {...props}>{props.children}</h1>
);

export const GradientHeading = styled(H1)`
  text-align: ${props => (props.center ? 'center' : 'left')};
  background: linear-gradient(
    to right,
    ${variables.colorGreenDark},
    ${variables.colorBlue}
  );
  position: relative;
  display: inline-block;
  font-family: ${variables.fontPrimaryExtraBold};
  font-size: 33px;
  font-weight: bold;
  line-height: 1;
  padding: 8px;
  letter-spacing: -1.8px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Heading = GradientHeading;

const H2 = ({ center, ...props }: Props) => (
  <h2 {...props}>{props.children}</h2>
);

export const SubHeading = styled(H2)`
  font-size: 30px;
`;

const P = ({ center, small, ...props }: Props) => (
  <p {...props}>{props.children}</p>
);

export const Paragraph = styled(P)`
  color: ${props =>
    props.small ? variables.colorNeutral : variables.colorNeutralExtraDark};
  font-size: ${props =>
    props.small ? variables.fontSizeSmall : variables.fontSizeNormal};
  line-height: 1.5;
  text-align: ${props => (props.center ? 'center' : 'left')};
`;

export const ParagraphSmall = Paragraph.extend`
  color: ${variables.colorNeutral};
  font-size: ${variables.fontSizeSmall};
  text-align: ${props => (props.center ? 'center' : 'left')};
`;

export default { Heading, SubHeading, Paragraph, ParagraphSmall };
