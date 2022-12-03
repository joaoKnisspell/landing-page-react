import React from "react";
import styled from "styled-components";

const TextoContainer = styled.div` 
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
`

export const Titulo = styled.h2`
    font-size:36px;
    font-weight:600;
    color:#181818;
    margin: 0;
`

export const Paragrafo = styled.p`
    font-size:18px;
    font-weight:${props => props.weight};
    line-height: 27px;
    color:${props => props.cor};
    max-width: 400px;
    margin: 0;
`

export default function Texto(props){
    return(
        <TextoContainer>
            <Titulo>{props.titulo}</Titulo>
            <Paragrafo weight="400" cor="#181818">{props.paragrafo}</Paragrafo>
        </TextoContainer>
    )
}