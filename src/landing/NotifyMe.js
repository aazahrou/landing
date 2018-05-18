// @flow
import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import variables from '../ui/variables';

import { Button } from './ui';

const Container = styled.div`
  ${breakpoint('tablet')`
    display: inline-block;
    width: 360px;
  `};
`;

const Form = styled.form``;

const FormContainer = styled.div`
  display: flex;
`;

const InputContainer = styled.div`
  flex: 0 0 60%;
`;

const ButtonContainer = styled.div`
  flex: 0 0 40%;
`;

const Input = styled.input`
  font-family: ${variables.fontSecondary};
  font-size: ${variables.fontSizeNormal};
  width: calc(100% - 18px);
  margin-right: 18px;
  padding: 7px 0;
  border: 0;
  border-bottom: 2px solid ${variables.colorNeutralLight};
  outline: 0;
  &:focus {
    border-color: ${variables.colorGreen};
  }
`;

type Props = {};

type State = {
  isOpen: boolean,
  email: string,
};

class NotifyMe extends React.Component<Props, State> {
  input: ?HTMLInputElement;

  state = {
    isOpen: false,
    email: '',
  };

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (this.state.isOpen && prevState.isOpen !== this.state.isOpen) {
      if (this.input && typeof this.input.focus === 'function') {
        this.input.focus();
      }
    }
  }

  onChange(event: any) {
    this.setState({ email: event.target.value });
  }

  openForm() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <Container>
        {!this.state.isOpen && (
          <Button color="gradient" onClick={this.openForm.bind(this)}>
            Reserve your seat
          </Button>
        )}

        {this.state.isOpen && (
          <Form
            action="//change-bank.us16.list-manage.com/subscribe/post?u=59c2c9a0d1b971d07bb321cae&amp;id=06e561b0df"
            method="post"
            target="_blank"
          >
            <div
              style={{ position: 'absolute', left: '-5000px' }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_46b6fe823d9d4defe84ae62c8_3b2c8d9849"
                tabIndex="-1"
                value=""
              />
            </div>
            <FormContainer>
              <InputContainer>
                <Input
                  type="email"
                  value={this.state.email}
                  placeholder="Insert your email…"
                  name="EMAIL"
                  innerRef={ref => {
                    this.input = ref;
                  }}
                  onChange={this.onChange.bind(this)}
                  required
                />
              </InputContainer>
              <ButtonContainer>
                <Button type="submit" color="gradient" fluid>
                  Order free card
                </Button>
              </ButtonContainer>
            </FormContainer>
          </Form>
        )}
      </Container>
    );
  }
}

export default NotifyMe;
