// @flow

import Raven from 'raven-js';

export function initialize(): void {
  if (process.env.NODE_ENV === 'production') {
    Raven
      .config('https://43a9fed17500493eb47f471d475136dc@sentry.io/1211513', {
        environment: process.env.NODE_ENV,
      })
      .install();
  }
}

export default { initialize };
