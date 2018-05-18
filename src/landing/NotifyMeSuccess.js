// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import variables from '../ui/variables';

import { default as Page, Heading, Body } from './Page';
import GradientText from './GradientText';
import SocialIcons from './SocialIcons';

const Container = styled.div`
  text-align: center;
  ${breakpoint('tablet')`
  `};
`;

const Follow = styled.div`
  margin-top: 48px;
  ${breakpoint('tablet')`
  `};
`;

const FollowHeading = styled.div`
  color: ${variables.colorNeutral};
  font-size: ${variables.fontSizeSmall};
  margin-bottom: 18px;
  ${breakpoint('tablet')`
  `};
`;

const FollowIcons = styled.div`
  ${breakpoint('tablet')`
  `};
`;

export const NotifyMeSuccess = () => (
  <Page>
    <Container>
      <Heading>
        <GradientText>Thank you!</GradientText>
      </Heading>
      <Body>
        <p>
          You will be among the first to receive the latest updates from Change.
        </p>
      </Body>
      <Follow>
        <FollowHeading>Join the community</FollowHeading>
        <FollowIcons>
          <SocialIcons />
        </FollowIcons>
      </Follow>
    </Container>
  </Page>
);

export default NotifyMeSuccess;
