import React from 'react'

import { PageContainer, MainContainer, ButtonsContainer } from './styled'

import Header from '../../components/Header'
import Card from '../../components/Card';
import MatchButton from '../../components/MatchButton';

export default function Homepage(props) {
  return (
    <PageContainer>
      <Header
        currentPage={props.currentPage}
        changePage={props.changePage}
        putClear={props.putClear}
      />
      <MainContainer>
        <Card
          profileToChose={props.profileToChose}
        />
        <ButtonsContainer>
          <MatchButton
            backgroundColor={'red'}
            icon={'X'}
            choiceYes={false}
            id={props.profileToChose.id}
            postChoosePerson={props.postChoosePerson}
          />
          <MatchButton
            backgroundColor={'green'}
            icon={'V'}
            choiceYes={true}
            id={props.profileToChose.id}
            postChoosePerson={props.postChoosePerson}
          />
        </ButtonsContainer>
      </MainContainer>
    </PageContainer>
  );
}
