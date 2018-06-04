// @flow
import React from 'react';
import { Button } from './ui';
import styled from 'styled-components';
import svgAndroid from './img/android-logo.svg';
import svgApple from './img/ios-logo.svg';
import * as tracker from '../tracker/Tracker';

const Container = styled.div`
  max-width: 400px;
  margin: auto;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Image = styled.img`
  margin-right: 10px;
`;

const SpacingDiv = styled.div`
  min-width: 10px;
`;

const trackAndroidAppLinkClick = () => {
  tracker.track('ANDROID_APP_LINK');
};

const trackAppleAppLinkClick = () => {
  tracker.track('APPSTORE_APP_LINK');
};

const StyledButton = Button.extend`
  padding-left: 20px;
  padding-right: 20px;
  @media only screen and (max-device-width: 480px){
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const Buttons = () => (
  <Container>
    <InnerContainer>
      <a
        href="https://itunes.apple.com/ee/app/change-wallet/id1375897908?mt=8&app=itunes&ign-mpt=uo%3D4"
        onClick={trackAppleAppLinkClick}
      >
        <StyledButton color="gradient">
          <Image height="18px" src={svgApple} />App Store
        </StyledButton>
      </a>
      <SpacingDiv />
      <a
        href="https://play.google.com/store/apps/details?id=com.getchange.wallet.cordova"
        onClick={trackAndroidAppLinkClick}
      >
        <StyledButton color="gradient">
          <Image height="18px" src={svgAndroid} />Play Store
        </StyledButton>
      </a>
    </InnerContainer>
  </Container>
);

export default Buttons;
