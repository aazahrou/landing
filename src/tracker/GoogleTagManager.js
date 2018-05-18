// @flow

// https://www.npmjs.com/package/react-google-tag-manager

import React from 'react';
import gtmParts from 'react-google-tag-manager';
import { isProduction } from './Tracker';

type Props = {
  gtmId: string,
  dataLayerName: ?string,
  additionalEvents: any,
  previewVariables: ?string,
  scriptId: ?string,
};

class GoogleTagManager extends React.Component<Props> {
  componentDidMount() {
    if (isProduction()) {
      const dataLayerName = this.props.dataLayerName || 'dataLayer';
      const scriptId = this.props.scriptId || 'react-google-tag-manager-gtm';

      if (!window[dataLayerName]) {
        const gtmScriptNode = document.getElementById(scriptId);

        if (gtmScriptNode) {
          eval(gtmScriptNode.textContent); // eslint-disable-line
        } else {
          throw new Error('Could not initialize Google Tag Manager');
        }
      }
    }
  }

  render() {
    if (!isProduction()) {
      return <div />;
    }

    const gtm = gtmParts({
      id: this.props.gtmId,
      dataLayerName: this.props.dataLayerName || 'dataLayer',
      additionalEvents: this.props.additionalEvents || {},
      previewVariables: this.props.previewVariables || false,
      scheme: 'https:',
    });

    return (
      <div>
        <div>{gtm.noScriptAsReact()}</div>
        <div id={this.props.scriptId || 'react-google-tag-manager-gtm'}>
          {gtm.scriptAsReact()}
        </div>
      </div>
    );
  }
}

export default GoogleTagManager;
