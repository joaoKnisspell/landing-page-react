import React from "react";
import styled from 'styled-components';
import logo from './logo.png';
import { Button } from '../../components/button';

const HeaderContainer = styled.header`
    width:100vw;
    height:80px;
    padding:0 5%;
    box-sizing: border-box;
    display:flex;
    justify-content:space-between;
    align-items:center;
    ul{
        display:flex;
        gap:3em;
        list-style-type:none;   
        a{
            text-decoration:none;
            color:#FFF;
        }
    }
`

const ButtonsContainer = styled.div`
    display:flex;
    gap:1em;
`

export default function Header(){
    return(
        <HeaderContainer>
            <div>
                <img src={logo} alt="logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Browse Games</a></li>
                    <li><a href="#">Store</a></li>
                </ul>
            </nav>
            <ButtonsContainer>
                <Button padding="8px 16px" fundo="#3B44F6" borda="none">Sign up</Button>
                <Button padding="8px 16px" fundo="transparent" borda="1px solid  #FFFFFF">Login</Button>
            </ButtonsContainer>
        </HeaderContainer>
    )
}