// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import variables from '../ui/variables';

const Container = styled.div`
  padding: 96px 0;
  ${breakpoint('tablet')`
    padding: 144px 0;
  `};
`;

const InnerContainer = styled.div`
  padding: 0 24px;
  ${breakpoint('tablet')`
    width: 960px;
    margin: 0 auto;
    padding: 0;
  `};
  ${breakpoint('desktop')`
  `};
`;

export const Heading = styled.div`
  font-family: ${variables.fontPrimary};
  font-size: ${variables.fontSizeLarger};
  font-weight: ${variables.fontWeightBold};
  margin-bottom: 12px;
  letter-spacing: -0.5px;
  ${breakpoint('tablet')`
    font-size: ${variables.fontSizeLargest};
    margin-bottom: 24px;
    letter-spacing: -1px;
  `};
  ${breakpoint('desktop')`
  `};
`;

export const Body = styled.div`
  color: ${variables.colorNeutralDark};
  font-family: ${variables.fontSecondary};
  ${breakpoint('tablet')`
  `};
  ${breakpoint('desktop')`
  `};
  p {
    margin-bottom: 12px;
    ${breakpoint('tablet')`
      font-size: ${variables.fontSizeMedium};
    `};
  }
`;

type Props = {
  children: any,
};

export const Page = (props: Props) => (
  <Container>
    <InnerContainer>{props.children}</InnerContainer>
  </Container>
);

export default Page;
