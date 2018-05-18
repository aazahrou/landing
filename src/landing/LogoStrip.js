// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { Link } from 'react-router-dom';
import { Transition } from 'react-transition-group';

import variables from '../ui/variables';

import { Modal } from './ui';

const Container = styled.div`
  overflow: hidden;
  padding: 0 24px;
  ${breakpoint('tablet')`
    padding: 0;
  `};
`;

const InnerContainer = styled.div`
  ${breakpoint('tablet')`
    width: 960px;
    margin: 0 auto;
  `};
`;

const Heading = styled.div`
  color: ${variables.colorNeutral};
  font-size: ${variables.fontSizeSmall};
  text-align: center;
  margin-bottom: 6px;
`;

const ItemsContainer = styled.div`
  position: relative;
`;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

const ItemSlot = styled.div`
  flex: 0 0 ${props => 100 / 3 + '%'};
  overflow: hidden;
  position: relative;
  height: 100px;
  ${breakpoint('landscape')`
    flex: 0 0 ${props => 100 / props.itemsPerRow + '%'};
  `};
`;

const Item = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
  padding: 0 12px;
  opacity: 0.5;
  transform: translateX(100%);
  transition: all 0.6s;
  user-select: none;
  ${breakpoint('landscape')`
    padding: 0 30px;
    &:hover {
      opacity: .75;
    }
  `};

  ${props =>
    props.state === 'entering' &&
    `
    transform: translateX(0);
  `};
  ${props =>
    props.state === 'entered' &&
    `
    transform: translateX(0);
  `};
  ${props =>
    props.state === 'exiting' &&
    `
    transform: translateX(-100%);
  `};
  ${props =>
    props.state === 'exited' &&
    `
    transition: none;
  `};
`;

const ItemLink = styled(Link)``;

const ItemImage = styled.img`
  width: 100%;
`;

type Props = {
  title?: string,
  items: Array<Object>,
};

type State = {
  activeIndex: number,
  isModalOpen: boolean,
  videoId: ?string,
};

class LogoStrip extends React.Component<Props, State> {
  intervalId: any;
  itemsPerRow: number;

  state = {
    activeIndex: 0,
    isModalOpen: false,
    videoId: '',
  };

  constructor(props: Props) {
    super(props);

    this.itemsPerRow = 6;
  }

  componentDidMount() {
    const totalItems = this.props.items.length;

    if (totalItems > this.itemsPerRow) {
      this.intervalId = setInterval(() => {
        const nextIndex =
          this.state.activeIndex >= totalItems - 1
            ? 0
            : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
      }, 3000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  handleClick(e: Event, item: Object) {
    if (!item.link) {
      e.preventDefault();
    } else if (item.modal && item.videoId) {
      e.preventDefault();
      this.setState({
        isModalOpen: true,
        videoId: item.videoId,
      });
    }
  }

  isActiveItem(activeIndex: number, slotIndex: number, j: number) {
    const totalItems = this.props.items.length;

    let index = activeIndex + slotIndex + 1;

    if (index > totalItems - 1) {
      index = index - totalItems;
    }

    return index === j;
  }

  render() {
    return (
      <Container>
        <InnerContainer>
          {this.props.title && <Heading>{this.props.title}</Heading>}

          <ItemsContainer>
            <Items>
              {this.props.items.slice(0, 6).map((slot, i) => (
                <ItemSlot key={i} itemsPerRow={this.itemsPerRow}>
                  {this.props.items.map((item, j) => (
                    <Transition
                      key={j}
                      in={this.isActiveItem(this.state.activeIndex, i, j)}
                      timeout={600}
                    >
                      {state => (
                        <Item state={state}>
                          <ItemLink
                            to={item.link || ''}
                            target="_blank"
                            onClick={e => {
                              this.handleClick(e, item);
                            }}
                          >
                            <ItemImage src={item.image} alt={item.name} />
                          </ItemLink>
                        </Item>
                      )}
                    </Transition>
                  ))}
                </ItemSlot>
              ))}
            </Items>
          </ItemsContainer>
        </InnerContainer>

        <Modal
          isOpen={this.state.isModalOpen}
          closeModal={this.closeModal.bind(this)}
        >
          {this.state.videoId && (
            <div className="ReactModal__video">
              <iframe
                title="YouTube"
                src={
                  'https://www.youtube.com/embed/' +
                  this.state.videoId +
                  '?rel=0&amp;showinfo=0&amp;autoplay=1'
                }
                frameBorder="0"
                allowFullScreen
              />
            </div>
          )}
        </Modal>
      </Container>
    );
  }
}

export default LogoStrip;
