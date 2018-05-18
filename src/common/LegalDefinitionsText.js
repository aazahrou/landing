// @flow
import React from 'react';

import styled from 'styled-components';
import variables from '../ui/variables';

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  background: ${variables.colorWhite};
  font-size: 14px;
  line-height: 2em;
  text-align: justify;

  ul > li {
    margin-top: 16px;
  }
`;

export const LegalDefinitionsText = () => (
  <Container>
    <div>
      <ul>
        <li>
          <span className="font-weight-bold">Beneficial owner</span> means a
          natural person who, taking advantage of their influence, makes a
          transaction, act, action, operation or step or otherwise exercises
          control over a transaction, act, action, operation or step or over
          another person and in whose interests or favor or on whose account a
          transaction or act, action, operation or step is made.
        </li>
        <li>
          <span className="font-weight-bold">Politically exposed person</span>{' '}
          means a natural person who is or who has been entrusted with prominent
          public functions including a head of State, head of government,
          minister or deputy or assistant minister; a member of parliament or of
          a similar legislative body, a member of a governing body of a
          political party, a member of a supreme court, a member of a court of
          auditors or of the board of a central bank; an ambassador, a chargé
          d&apos;affaires or a high-ranking officer in the armed forces; a
          member of an administrative, management or supervisory body of a
          State-owned enterprise; a director, deputy director or member of the
          board or equivalent function of an international organization, except
          middle-ranking or more junior officials.
        </li>
        <li>
          <span className="font-weight-bold">
            Family member of a politically exposed person{' '}
          </span>
          means the spouse, or a person considered to be equivalent to a spouse,
          of a politically exposed person; a child and their spouse, or a person
          considered to be equivalent to a spouse, of a politically exposed
          person; or a parent of a politically exposed person.
        </li>
        <li>
          <span className="font-weight-bold">
            Person known to be close associate of a politically exposed person
          </span>{' '}
          means a natural person who is known to be the beneficial owner or to
          have joint beneficial ownership of a legal person or a legal
          arrangement, or any other close business relations, with a politically
          exposed person; or a natural person who has sole beneficial ownership
          of a legal entity or legal arrangement which is known to have been set
          up for the de facto benefit of a politically exposed person.
        </li>
      </ul>
    </div>
  </Container>
);
