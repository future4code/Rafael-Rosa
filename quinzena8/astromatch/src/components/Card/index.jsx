import React from 'react'

import { CardContainer, LayerTransparency } from './styled'


export default function Card(props) {
  return (
    <CardContainer
      photo={props.profileToChose.photo}
    >
      <LayerTransparency>
        <h1>{props.profileToChose.name}, {props.profileToChose.age}</h1>
        <p>{props.profileToChose.bio}</p>
      </LayerTransparency>
    </CardContainer>
  );
}
