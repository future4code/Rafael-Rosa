import React from 'react'

import { PageContainer, MainContainer } from './styled'

import Header from '../../components/Header'
import MatchesList from '../../components/MatchesList'

export default function Matches(props) {
  return (
    <PageContainer>
      <Header
        currentPage={props.currentPage}
        changePage={props.changePage}
        putClear={props.putClear}
      />
      <MainContainer>
        <MatchesList 
          matches={props.matches}
        />
      </MainContainer>
    </PageContainer>
  );
}
