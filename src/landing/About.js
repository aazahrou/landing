// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import IntercomBubble from './IntercomBubble';
import AboutFacts from './AboutFacts';
import AboutIntro from './AboutIntro';
import Residency from './eResidency';
import logoBlockchainAssets from './img/partners/blockchain-assets.png';

import logoeResidency from './img/partners/e-residency.png';
import logoICOBank from './img/partners/ico-bank.png';
import logoKRToken from './img/partners/kr-token.png';
import logoMothership from './img/partners/mothership.png';
import logoTSH from './img/partners/TSH.png';
import imageAndras from './img/people/andras.jpg';
import imageDragos from './img/people/dragos.jpg';
import imageFrancisco from './img/people/francisco.jpg';
import imageGustav from './img/people/gustav.jpg';
import imageHelen from './img/people/helen.jpg';

import imageKristjan from './img/people/kristjan.jpg';
import imageLesly from './img/people/lesly.jpg';
import imageMiguel from './img/people/miguel.jpg';
import imageCofi from './img/people/cofi.jpg';
import imageRoger from './img/people/roger.jpg';
import imageLiisi from './img/people/liisi.jpg';

import LogoStrip from './LogoStrip';
import Team from './Team';
import Timeline from './Timeline';
import Token from './Token';

import { NavButton } from './ui';

import variables from '../ui/variables';

import VisionMission from './VisionMission';

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  padding: 96px 0 0;
  background: ${variables.colorWhite};
  ${breakpoint('tablet')`
    padding: 0;
  `};
`;

const CareersCTA = styled.div`
  color: ${variables.colorNeutral};
  margin: 48px 0;
  text-align: center;
  ${breakpoint('tablet')`
  `};
`;

export const About = () => (
  <Container>
    <AboutIntro />
    <VisionMission />
    <AboutFacts />
    <Residency />
    <LogoStrip
      title="Partners"
      items={[
        {
          name: 'e-Residency',
          image: logoeResidency,
          link:
            'http://fintechnews.sg/1483/roboadvisor/smartly-sg-announces-robo-advisor-targeted-southeast-asian-millennials/',
        },
        {
          name: 'Mothership',
          image: logoMothership,
          link: 'https://mothership.cx/',
        },
        {
          name: 'KR Token',
          image: logoKRToken,
          link: 'http://www.krtoken.com/',
        },
        {
          name: 'Blockchain Assets',
          image: logoBlockchainAssets,
          link: 'http://bca.fund/',
        },
        {
          name: 'ICO Bank',
          image: logoICOBank,
          link: 'https://www.ico-bank.io/',
        },
        {
          name: 'TSH Development',
          image: logoTSH,
          link: 'http://www.tsh-d.co.jp/',
        },
      ]}
    />
    <Timeline
      milestones={[
        { title: '', body: 'Change is founded in Singapore' },
        { title: '', body: '$17.5 million raised from 5600 people' },
        { title: '', body: 'Change Wallet experiment' },
        { title: '', body: 'Change Marketplace', highlighted: true },
        {
          title: '',
          body: 'Traditional currencies such as USD, EUR, GBP',
          highlighted: true,
        },
        { title: '', body: 'Banking license', highlighted: true },
      ]}
    />
    <Team
      title="Team"
      people={[
        {
          name: 'Kristjan Kangro',
          title: 'CEO',
          linkedin: 'http://bit.ly/2AdkfEu',
          twitter: 'https://twitter.com/KristjanKangr0',
          image: imageKristjan,
        },
        {
          name: 'Francisco Bernardo',
          title: 'Marketing',
          linkedin: 'http://bit.ly/2naO8QJ',
          image: imageFrancisco,
        },
        {
          name: 'Gustav Liblik',
          title: 'Product',
          linkedin: 'http://bit.ly/2BiKTss',
          image: imageGustav,
        },
        {
          name: 'Dragos Giugula',
          title: 'Partnerships',
          linkedin: 'http://bit.ly/2zuj9AS',
          image: imageDragos,
        },
        {
          name: 'Liisi Eenmaa',
          title: 'HR',
          linkedin: 'http://bit.ly/2oKApNN',
          image: imageLiisi,
        },
        {
          name: 'Helen Kokk',
          title: 'UX Designer',
          linkedin: 'http://bit.ly/2GWukFM',
          image: imageHelen,
        },
        {
          name: 'Cofi',
          title: 'Auditor',
          image: imageCofi,
        },
      ]}
    />
    <Team
      title="Advisors"
      people={[
        {
          name: 'Roger Crook',
          title: 'Former CEO of DHL',
          linkedin: 'http://bit.ly/2k4pVdF',
          image: imageRoger,
        },
        {
          name: 'Lesly Goh',
          title: 'Financial services lead at Microsoft',
          linkedin: 'http://bit.ly/2ic9yLm',
          image: imageLesly,
        },
        {
          name: 'Miguel Soriano',
          title: 'Professor at the National University of Singapore',
          linkedin: 'http://bit.ly/2jrTwcZ',
          image: imageMiguel,
        },
        {
          name: 'Andras Kristof',
          title: 'Blockchain Expert',
          linkedin: 'http://bit.ly/2iZp8Hn',
          image: imageAndras,
        },
      ]}
    />
    <CareersCTA>
      <p>Join our fast growing team of over 20 members</p>
      <NavButton to="/careers" color="gradient">
        Open positions
      </NavButton>
    </CareersCTA>
    <Token />
    <IntercomBubble />
  </Container>
);

export default About;
