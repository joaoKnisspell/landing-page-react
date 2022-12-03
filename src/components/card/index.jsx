import styled from "styled-components";
import cart from "./cart.svg";

const CardContainer = styled.div`
    margin-top: 2em;
    background-color: #FFFFFF;
    border: 0.3px solid #D1D1D1;
    max-width: 262px;
    box-sizing: border-box;
    padding:1em;
    box-shadow: 0px 8px 10px rgba(164, 164, 164, 0.07);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 1em;
    h3{
        margin:0;
    }
    p {
        margin: 0;
    }
    .buy{
        display: flex;
        justify-content: space-between;
        img{
            width: 20px;
        }
    }
    a{
        text-decoration: none;
        color:#3B44FE;
        font-weight: 500;
        display: flex;
        gap: 5px;
    }
`



export default function Card(props){
    return(
        <CardContainer>
            <img src={props.src} alt={props.alt} />
            <h3>{props.titulo}</h3>
            <div className="buy">
                <p>{props.preco}</p>
                <a href="#">Comprar<img src={cart} alt="cart"/></a>
            </div>
        </CardContainer>
    )
}