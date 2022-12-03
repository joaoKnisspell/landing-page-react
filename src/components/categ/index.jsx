import { Titulo } from '../texto';
import { Paragrafo } from '../texto';
import styled from 'styled-components';

//Img
import categ1 from './categ1.png';
import categ2 from './categ2.png';
import categ3 from './categ3.png';
import categ4 from './categ4.png';
import categ5 from './categ5.png';
import categ6 from './categ6.png';

const Texto = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    a{
        text-decoration: none;
        color: #3B44F6;
    }
`
const Carrosel = styled.div`
    display:flex;
    justify-content: space-evenly;
    margin-top: 1em;
`

export default function Categorias(){
    return(
        <>
            <Texto>
                <Titulo>Games Genres</Titulo>
                <Paragrafo weight="600"><a href='#'>See all genres</a></Paragrafo>
            </Texto>
            <Carrosel>
                <img src={categ1} alt="Jogos de estrategia" />
                <img src={categ2} alt="Jogos de estrategia" />
                <img src={categ3} alt="Jogos de estrategia" />
                <img src={categ4} alt="Jogos de estrategia" />
                <img src={categ5} alt="Jogos de estrategia" />
                <img src={categ6} alt="Jogos de estrategia" />
            </Carrosel>
        </>
    )
}