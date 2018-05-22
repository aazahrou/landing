// @flow

import React from 'react';
import { shallow } from 'enzyme';
import { IntercomBubble } from './IntercomBubble';

describe('Intercom bubble component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<IntercomBubble />);
  });

  it('renders the component', () => {
    expect(component);
  });
});
