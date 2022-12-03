import Header from './components/header';
import styled from 'styled-components';
import banner from './img/banner.jpg';
import Main from './components/main';
import SectionTwo from './components/sectionTwo';
import SectionThree from './components/sectionThree';
import Footer from './components/footer';

const Body = styled.body`
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

const AppContainer = styled.div`
  max-width:100vw;
  margin: 0;
  padding: 0;
  box-sizing:border-box;
  font-family: 'Lexend', sans-serif;
  overflow-x: hidden;
  background-color: #F5F4F9;
`
const MainContainer = styled.main`
  height:100vh;
  width:100vw;
  background-image: url(${banner});
  background-size:cover;
`

export default function App() {
  return (
    <AppContainer>

      <MainContainer>
        <Header />
        <Main />
      </MainContainer>

      <SectionTwo />

      <SectionThree />

      <Footer />

    </AppContainer>
  )
}


