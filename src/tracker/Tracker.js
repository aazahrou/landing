// @flow

import mixpanel from 'mixpanel-browser';
import config from 'react-global-configuration';
import { initialize as initializeErrorTracking } from './ErrorTracker';

export const isProduction = (): boolean =>
  (process.env.REACT_APP_ENV || process.env.NODE_ENV) === 'production';

export function initialize(): void {
  initializeErrorTracking();
  if (isProduction()) {
    mixpanel.init(config.get('mixpanelToken'));
  }
}

export function track(event: string, data: ?Object = undefined): void {
  if (isProduction()) {
    mixpanel.track(event, data);
  }
}

export default {
  initialize,
  track,
};
