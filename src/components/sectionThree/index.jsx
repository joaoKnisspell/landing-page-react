import styled from 'styled-components';
import Card from '../card';
import { Titulo } from '../texto';
//Img
import shop1 from './shop1.png';
import shop2 from './shop2.png';
import shop3 from './shop3.png';
import shop4 from './shop4.png';
import shop5 from './shop5.png';
import shop6 from './shop6.png';
import shop7 from './shop7.png';
import shop8 from './shop8.png';
import shop9 from './shop9.png';
import shop10 from './shop10.png';
import shop11 from './shop11.png';
import shop12 from './shop12.png';

const Container = styled.section`
    margin:0 10%;
    .cards__container{
        display: flex;
        justify-content: space-between;
    }
    .espacamento{
        margin-top: 5em;
        .secaoDois{
            flex-wrap: wrap;
        }
    }
`

export default function SectionThree(props){
    return(
        <Container>
            <Titulo>Best Seller Games</Titulo>
            <div className='cards__container'>
                <Card src={shop1} alt="Minecraft" titulo="Minecraft" preco="R$49,99"/>
                <Card src={shop2} alt="Asphalt 9: Legends" titulo="Asphalt 9: Legends" preco="R$149,99"/>
                <Card src={shop3} alt="The Witcher 3" titulo="The Witcher 3" preco="R$299,99"/>
                <Card src={shop4} alt="Surving Mars" titulo="Surving Mars" preco="R$79,99"/>
            </div>
            <div className="espacamento">
            <Titulo>Popular Games</Titulo>
            <div className='cards__container secaoDois'>
                <Card src={shop5} alt="GTA V" titulo="GTA V" preco="R$349,99"/>
                <Card src={shop6} alt="Roblox" titulo="Roblox" preco="Grátis"/>
                <Card src={shop7} alt="NBA 2K22" titulo="NBA 2K22" preco="R$199,99"/>
                <Card src={shop8} alt="Dead by Daylight" titulo="Dead by Daylight" preco="R$79,99"/>
                <Card src={shop9} alt="ARK: Survival Evolved" titulo="ARK: Survival Evolved" preco="R$29,99"/>
                <Card src={shop10} alt="Rocket League" titulo="Rocket League" preco="Grátis"/>
                <Card src={shop11} alt="Forza Horizon 5" titulo="Forza Horizon 5" preco="R$129,99"/>
                <Card src={shop12} alt="Cities: Skylines" titulo="Cities: Skylines" preco="R$19,99"/>
            </div>
        </div>
        </Container>
    )
}