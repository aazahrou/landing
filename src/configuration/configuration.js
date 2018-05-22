// @flow

import config from 'react-global-configuration';

const DEFAULT_CONF_DEV = {
  apiUrl: 'https://staging-api.getchange.com',
  appUrl: 'https://staging-app.getchange.com',
  mixpanelToken: 'none',
};

const DEFAULT_CONF_STAGING = {
  apiUrl: 'https://staging-api.getchange.com',
  appUrl: 'https://staging-app.getchange.com',
  mixpanelToken: 'none',
};

const DEFAULT_CONF_PRODUCTION = {
  apiUrl: 'https://api.getchange.com',
  appUrl: 'https://app.getchange.com',
  mixpanelToken: 'eda8215eea75dc2a02b6fce287d0e144',
};

export default function initialize(): void {
  const env = process.env.REACT_APP_ENV || process.env.NODE_ENV;
  if (env === 'staging') {
    config.set(DEFAULT_CONF_STAGING, { freeze: false });
  } else if (env === 'production') {
    config.set(DEFAULT_CONF_PRODUCTION, { freeze: false });
  }
  config.set(DEFAULT_CONF_DEV, { freeze: false });
}
