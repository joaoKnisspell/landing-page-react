import styled from "styled-components"

const Container = styled.div`
    max-width: 250px;
    margin:60px 0;
    text-align: center;
    p{
       color:#181818;
       font-size:20px;
       font-weight: 500;
       line-height: 26px;
    }
`

export default function InfoCard(props){
    return(
        <Container>
            <img src={props.imagem} alt={props.alt}/>
            <p>{props.texto}</p>
        </Container>
    )
}