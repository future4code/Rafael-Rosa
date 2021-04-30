import React from 'react';
import styled from "styled-components";


const SmallCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardPequeno(props) {
    return (
        <SmallCardContainer className="smallcard-container">
            <Div>
                <p href={ props.email }>Email: {props.email}</p>
                <p href={ props.fone }>Telefone: {props.fone}</p>
            </Div>
        </SmallCardContainer>
    )
}

export default CardPequeno;