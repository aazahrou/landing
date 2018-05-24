// @flow
/* eslint-disable import/no-extraneous-dependencies,import/first */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import 'jest-styled-components';

configure({ adapter: new Adapter() });

window.matchMedia =
  window.matchMedia ||
  (() => ({
    matches: false,
    addListener() {},
    removeListener() {},
  }));

jest.mock('mixpanel-browser');
