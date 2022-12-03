import React from "react";
import styled from 'styled-components';

export const Button = styled.button`
    padding: ${props => props.padding};
    color:#FFF;
    border-radius:8px;
    background-color:${props => props.fundo};
    border:${props => props.borda};
    font-family: 'Lexend', sans-serif;
    cursor:pointer;
    max-width: 180px;
    font-size:${props => props.tamanho};
`
