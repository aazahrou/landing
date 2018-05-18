// @flow
import React from 'react';
import Intercom from 'react-intercom';

export const IntercomBubble = ({ isAuthenticated, user, profile }: Props) => {
  const appId = 'sj3ny015';
  return <Intercom appID={appId} />;
};

export default IntercomBubble;
