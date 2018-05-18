// @flow

import config from 'react-global-configuration';

const DEFAULT_CONF_DEV = {
  mixpanelToken: 'none',
  googleMapsKey: 'AIzaSyCLV3dMT4Oh6N_U8R1Sqn_84RPdI9p_kos',
};

const DEFAULT_CONF_STAGING = {
  mixpanelToken: 'none',
  googleMapsKey: 'AIzaSyCLV3dMT4Oh6N_U8R1Sqn_84RPdI9p_kos',
};

const DEFAULT_CONF_PRODUCTION = {
  mixpanelToken: 'eda8215eea75dc2a02b6fce287d0e144',
  googleMapsKey: 'AIzaSyC5hizdMNKn1sLOUdmrCSeSgSsJfl7acO4',
};

export default function initialize(): void {
  const env = process.env.REACT_APP_ENV || process.env.NODE_ENV;
  if (env === 'development') {
    config.set(DEFAULT_CONF_DEV, { freeze: false });
  } else if (env === 'staging') {
    config.set(DEFAULT_CONF_STAGING, { freeze: false });
  } else if (env === 'production') {
    config.set(DEFAULT_CONF_PRODUCTION, { freeze: false });
  }
}
