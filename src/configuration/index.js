// @flow
import initialize from './configuration';

type configurationType = {
  initialize: () => void,
};

const configuration: configurationType = {
  initialize,
};

export default configuration;
