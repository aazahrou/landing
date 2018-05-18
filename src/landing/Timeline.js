// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import { GradientText } from './GradientText';

import variables from '../ui/variables';

const Container = styled.div`
  margin: 30px 0 60px;
  padding: 0 24px;
  ${breakpoint('tablet')`
    margin: 96px 0 120px;
    padding: 0;
  `};
`;

const InnerContainer = styled.div`
  ${breakpoint('tablet')`
    width: 960px;
    margin: 0 auto;
  `};
  ${breakpoint('desktop')`
    width: 1152px;
  `};
`;

const Heading = styled.div`
  font-family: ${variables.fontPrimary};
  font-size: ${variables.fontSizeLarger};
  font-weight: ${variables.fontWeightBold};
  margin-bottom: 24px;
  letter-spacing: -0.5px;
  ${breakpoint('tablet')`
    font-size: ${variables.fontSizeLargest};
    margin-bottom: 36px;
    letter-spacing: -1px;
  `};
`;

const LineContainer = styled.div`
  position: relative;
`;

const Line = styled.div`
  position: absolute;
  top: 2px;
  left: 0;
  z-index: ${variables.zIndexTimelineLine};
  width: 10px;
  height: 100%;
  background-image: linear-gradient(
    to bottom,
    ${variables.colorGreenLight} 0%,
    ${variables.colorBlue} 100%
  );
  border-radius: 9999px;
  ${breakpoint('tablet')`
    display: flex;
    justify-content: space-between;
    position: static;
    top: 0;
    width: 100%;
    height: 10px;
    margin-bottom: 24px;
    background-image: linear-gradient(
      to right,
      ${variables.colorGreenLight} 0%,
      ${variables.colorBlue} 100%
    );
  `};
`;

const Milestones = styled.div`
  ${breakpoint('tablet')`
    display: flex;
    justify-content: space-between;
  `};
`;

const Milestone = styled.div`
  position: relative;
  z-index: ${variables.zIndexTimelineMilestone};
  margin-bottom: 18px;
  padding-left: 36px;
  ${breakpoint('tablet')`
    flex: 0 0 ${props => props.width + '%'};
    margin: 0;
    padding: 0;
    padding-right: 48px;
    padding-left: 9px;
    &:last-child {
      text-align: right;
      padding-right: 0;
      &:before {
        left: auto;
        right: -2px;
      }
    }
    // &:nth-child(3) > * {
    //   color: #88dfdb;
    // }
    &:nth-child(4) > * {
      color: #7bd8df;
    }
    &:nth-child(5) > * {
      color: #6fd0e2;
    }
    &:nth-child(6) > * {
      color: #57c1e9;
    }
  `};
  &:before {
    content: '';
    position: absolute;
    top: 2px;
    left: -4px;
    width: 18px;
    height: 18px;
    border: 4px solid ${variables.colorWhite};
    border-radius: 9999px;
    ${breakpoint('tablet')`
      top: -38px;
      left: 0;
    `};
  }
`;

const MilestoneTitle = styled.div`
  color: ${props =>
    props.highlighted ? variables.colorNeutralDark : variables.colorNeutral};
  font-weight: ${variables.fontWeightBold};
  margin-bottom: 3px;
  ${breakpoint('tablet')`
    margin-bottom: 9px;
  `};
`;

const MilestoneDescription = styled.div`
  color: ${props =>
    props.highlighted ? variables.colorNeutralDark : variables.colorNeutral};
  line-height: 1.4;
`;

type Props = {
  milestones: Array<Object>,
};

export const Timeline = (props: Props) => (
  <Container>
    <InnerContainer>
      <Heading>
        <GradientText>Product timeline</GradientText>
      </Heading>
      <LineContainer>
        <Line />
        <Milestones>
          {props.milestones.map((milestone, i) => (
            <Milestone
              highlighted={milestone.highlighted}
              width={100 / props.milestones.length}
              key={i}
            >
              <MilestoneTitle highlighted={milestone.highlighted}>
                {milestone.title}
              </MilestoneTitle>
              <MilestoneDescription highlighted={milestone.highlighted}>
                {milestone.body}
              </MilestoneDescription>
            </Milestone>
          ))}
        </Milestones>
      </LineContainer>
    </InnerContainer>
  </Container>
);

export default Timeline;
