import React from 'react'
import { MatchesListContainer, MatchItem, ItemPhoto, ItemDescription } from './styled'


export default function MatchesList(props) {

  const renderList = props.matches.map((match) => {
    return (
      <MatchItem>
        <ItemPhoto>
          <img src={match.photo} />
        </ItemPhoto>
        <ItemDescription>
          {match.name}, {match.age}
        </ItemDescription>
      </MatchItem>
    )
  })

  return (
    <MatchesListContainer>
      { 
        props.matches.length > 0 ? {renderList} : <MatchItem>Você ainda não tem matches :(</MatchItem>
      }
    </MatchesListContainer>
  );
}
