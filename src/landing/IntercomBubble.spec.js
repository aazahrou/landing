// @flow

import React from 'react';
import { shallow } from 'enzyme';
import Intercom from 'react-intercom';
import { IntercomBubble } from './IntercomBubble';

jest.mock('../http');

describe('Intercom bubble component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<IntercomBubble />);
  });

  it('renders the component', () => {
    expect(component);
  });
});
