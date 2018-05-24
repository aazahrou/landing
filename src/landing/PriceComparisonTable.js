// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import change from './img/competitors/change.png';
import coinbase from './img/competitors/coinbase.png';
import etoro from './img/competitors/etoro.png';

const Container = styled.div`
  margin-bottom: 96px;
  font-size: 11px;
  ${breakpoint('tablet')`
    margin-bottom: 240px;
    font-size: 18px;
    text-align: center;
  `};

  .bold {
    font-weight: bold;
  }
`;

const InnerContainer = styled.div`
  text-align: center;
  ${breakpoint('tablet')`
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
  `};
`;

const Image = styled.img``;

type Props = {};

const Td = styled.td`
  vertical-align: middle !important;
`;

const Th = styled.th`
  vertical-align: middle !important;
`;

class PriceComparisonTable extends React.Component<Props> {

  render() {
    return (
      <Container>
          <InnerContainer>
            <table className="table">
              <thead>
                <tr>
                  <Th scope="col" />
                  <Th scope="col">
                    <Image width="75px" src={change} />
                  </Th>
                  <Th scope="col">
                    <Image width="75px" src={coinbase} />
                  </Th>
                  <Th scope="col">
                    <Image width="65px" src={etoro} />
                  </Th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Td>Account</Td>
                  <Td>
                    <span className="bold">Free</span>
                  </Td>
                  <Td>Free</Td>
                  <Td>Free</Td>
                </tr>
                <tr>
                  <Td>Crypto purchase fee</Td>
                  <Td>
                    <span className="bold">Free</span>
                  </Td>
                  <Td>1.49%</Td>
                  <Td>up to 5%</Td>
                </tr>
                <tr>
                  <Td>Trading fee</Td>
                  <Td>
                    <span className="bold">Free</span>
                  </Td>
                  <Td>1.49%</Td>
                  <Td>up to 5%</Td>
                </tr>
                <tr>
                  <Td>Withdrawal fee</Td>
                  <Td>
                    <span className="bold">No commission</span>
                  </Td>
                  <Td>No commission</Td>
                  <Td>$25</Td>
                </tr>
              </tbody>
            </table>
          </InnerContainer>
      </Container>
    );
  }
}

export default PriceComparisonTable;
