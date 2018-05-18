// @flow

import Raven from 'raven-js';

export function initialize():void {
  if (process.env.NODE_ENV === 'production') {
    Raven
      .config('https://171315bead0b435284d807e00caa2a0d@sentry.io/227741', {
        environment: process.env.NODE_ENV,
      })
      .install();
  }
}

export default { initialize };
