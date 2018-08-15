// @flow
import React from 'react';
import styled from 'styled-components';
import logoABC from './img/press/abc.png';
import logoAripaev from './img/press/aripaev.png';
import logoBBC from './img/press/BBC.png';
import logoBusinessInsider from './img/press/business-insider.png';
import logoCNA from './img/press/CNA.png';
import logoCNBC from './img/press/cnbc.png';
import logoCoinTelegraph from './img/press/coin-telegraph.png';

import logoE27 from './img/press/e27.png';
import logoEPL from './img/press/epl.png';
import logoMarketWatch from './img/press/market-watch.png';
import logoYahooFinance from './img/press/yahoo-finance.png';

import LogoStrip from './LogoStrip';

import variables from '../ui/variables';

const Container = styled.div`
  background: ${variables.colorNeutralLightest};
  padding: 30px 0 18px;
`;

export const Press = () => (
  <Container>
    <LogoStrip
      title="As featured in"
      items={[
        {
          name: 'E27',
          image: logoE27,
          link: 'http://bit.ly/2k8jxSz',
        },
        {
          name: 'Yahoo! Finance',
          image: logoYahooFinance,
          link:
            'https://finance.yahoo.com/news/change-first-decentralised-crypto-bank-130000109.html',
        },
        {
          name: 'CNBC',
          image: logoCNBC,
          link:
            'https://www.cnbc.com/video/2017/12/18/riding-cryptocurrencies-to-become-a-major-bank.html?play=1',
        },
        {
          name: 'Business Insider',
          image: logoBusinessInsider,
          link:
            'https://markets.businessinsider.com/news/stocks/cryptocurrency-based-company-change-launches-bitcoin-app-with-no-trading-fees-1027376720',
        },
        {
          name: 'BBC',
          image: logoBBC,
          link:
            'https://blog.getchange.com/changes-ceo-on-bbc-world-news/',
        },
        { name: 'ABC', image: logoABC },
        {
          name: 'Eesti Päevaleht',
          image: logoEPL,
          link:
            'http://digileht.epl.delfi.ee/arileht/eestlased-muudavad-singapuris-panganduse-tulevikku?id=76768158',
        },
        {
          name: 'MarketWatch',
          image: logoMarketWatch,
          link:
            'https://www.marketwatch.com/press-release/cryptocurrency-based-company-change-launches-bitcoin-app-with-no-trading-fees-2018-07-18',
        },
        {
          name: 'Channel NewsAsia',
          image: logoCNA,
          link: 'https://youtu.be/xtU7AOC77JY',
          modal: true,
          videoId: 'xtU7AOC77JY',
        },
        {
          name: 'Äripäev',
          image: logoAripaev,
          link:
            'https://www.aripaev.ee/uudised/2018/01/04/eestlased-ehitavad-maailma-suurimat-kruptopanka',
        },
        {
          name: 'Cointelegraph',
          image: logoCoinTelegraph,
          link:
            'https://cointelegraph.com/news/fintech-companies-disrupting-finance-creating-bank-of-tomorrow',
        },
      ]}
    />
  </Container>
);

export default Press;
