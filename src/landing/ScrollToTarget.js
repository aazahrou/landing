// @flow
import React from 'react';
import { withRouter } from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';

type Props = {
  hash: string,
  location: Object,
  pos: string,
  children: ?any,
};

class ScrollToTarget extends React.Component<Props> {
  element: ?HTMLDivElement;

  componentDidMount() {
    this.tryScroll();
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.location.hash !== prevProps.location.hash) {
      this.tryScroll();
    }
  }

  tryScroll() {
    if (this.element && this.props.location.hash === this.props.hash) {
      scrollToComponent(this.element, { align: this.props.pos });
    }
  }

  render() {
    return <div ref={ref => (this.element = ref)}>{this.props.children}</div>;
  }
}

export default withRouter(ScrollToTarget);
