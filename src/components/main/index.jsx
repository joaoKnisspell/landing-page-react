import React from "react";
import styled from 'styled-components';
import { Button } from '../button';

const MainContent = styled.div`
    margin: 0% 5%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    height: 70vh;
    h1, h3{
        color:#FFFFFF;
    }
    h1{
        font-size: 48px;
        margin: 0;
    }
    h3{
        margin:1em 0 2.5em 0;
        font-size: 24px;
        font-weight: 500;
        width: 400px;
    }

`

export default function Main(){
    return(
        <MainContent>
            <h1>MultiVersus</h1>
            <h3>Now officially free to play for all Xbox users.</h3>
            <Button tamanho="18px" padding="16px 32px" fundo="#3B44F6" borda="none">Get in now!</Button>
        </MainContent>
    )
}