// @flow

import React from 'react';
import { shallow } from 'enzyme';
import Intercom from 'react-intercom';
import { testUser, testProfile } from '../fixtures/testUserAndProfile';
import { IntercomBubble, type Props } from './IntercomBubble';

jest.mock('../http');

describe('Intercom bubble component', () => {
  let component;

  const props: Props = {
    isAuthenticated: true,
    user: testUser,
    profile: testProfile,
  };

  beforeEach(() => {
    component = shallow(<IntercomBubble {...props} />);
  });

  it('renders the component', () => {
    expect(component);
  });

  it('sends user & profile data to intercom', () => {
    const intercomUser = {
      user_id: testUser.id,
      email: testUser.email,
      name:
        testProfile.firstName &&
        testProfile.lastName &&
        `${testProfile.firstName} ${testProfile.lastName}`,
    };
    expect(
      component.contains(<Intercom appID="sj3ny015" {...intercomUser} />),
    ).toBe(true);
  });
});
