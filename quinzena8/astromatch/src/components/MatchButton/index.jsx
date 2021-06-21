import React from 'react'

import { ButtonTag } from './styled'


export default function MatchButton(props) {
  return (
    <ButtonTag
      borderColor={props.borderColor}
      onClick={() => {props.postChoosePerson(props.id, props.choiceYes)}}
    >
      <img src={props.icon} alt={"ícone Botão"} />
    </ButtonTag>
  );
}
