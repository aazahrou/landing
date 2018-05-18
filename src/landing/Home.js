// @flow
import React from 'react';
import styled from 'styled-components';
import IntercomBubble from './IntercomBubble';
import Card from './Card';
import GlobalMovement from './GlobalMovement';
import Hero from './Hero';
import Marketplace from './Marketplace';
import Press from './Press';
import ScrollToTarget from './ScrollToTarget';
import variables from '../ui/variables';
import Wallet from './Wallet';

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  background: ${variables.colorWhite};
`;

export const Home = () => (
  <ScrollToTarget hash="#home" pos="top">
    <Container>
      <Hero />
      <Wallet />
      <Card />
      <Marketplace />
      <GlobalMovement />
      <Press />
      <IntercomBubble />
    </Container>
  </ScrollToTarget>
);

export default Home;
