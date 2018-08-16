// @flow
import React from 'react';
import styled from 'styled-components';
import IntercomBubble from './IntercomBubble';
import Card from './Card';
import { Securities } from './Securities';
import CreateYourAccount from './CreateYourAccount';
import Hero from './Hero';
import Press from './Press';
import ScrollToTarget from './ScrollToTarget';
import variables from '../ui/variables';
import Wallet from './Wallet';
import Pricing from './Pricing';
import PriceComparisonTable from './PriceComparisonTable';

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
      <Securities />
      <Pricing />
      <PriceComparisonTable />
      <CreateYourAccount />
      <Press />
      <IntercomBubble />
    </Container>
  </ScrollToTarget>
);

export default Home;
