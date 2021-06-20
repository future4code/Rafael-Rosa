import React from 'react'
import { ButtonTag } from './styled'


export default function MatchButton(props) {
  return (
    <ButtonTag
      backgroundColor={props.backgroundColor}
      onClick={() => {props.postChoosePerson(props.id, props.choiceYes)}}
    >
      {props.icon}
    </ButtonTag>
  );
}
