import React from "react";
import styled from 'styled-components';
import Texto from '../texto';
import InfoCard from '../infoCard';
import Categorias from '../categ';
import card1 from '../../img/c1.png';
import card2 from '../../img/c2.png';
import card3 from '../../img/c3.png';

const SectionContainer = styled.section`
    margin:4% 10%;
    display: flex;
    flex-direction: column;
    height: 100vh;
    .cards{
        display: flex;
        justify-content: space-around;
    }
`

export default function sectionTwo(){
    return(
        <SectionContainer>
            <Texto titulo="Why eXStore?" paragrafo="We are the official Xbox partner in Indonesia that provides official video games." />
            <div className="cards">
            <InfoCard imagem={card1} alt="imagem card 1" texto="5000+ video games available" />
            <InfoCard imagem={card2} alt="imagem card 2" texto="Trusted by 100.000+ customers" />
            <InfoCard imagem={card3} alt="imagem card 3" texto="Available for all Xbox consoles" />
            </div>
            <Categorias />
        </SectionContainer>
    )
}