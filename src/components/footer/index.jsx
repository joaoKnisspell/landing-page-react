import styled from "styled-components";

const FooterStyle = styled.footer`
    margin-top: 6em;
    height: 70px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
`

export default function Footer(){
    return(
        <FooterStyle>
            <p>©Desenvolvido por João Knisspell</p>
        </FooterStyle>
    )
}