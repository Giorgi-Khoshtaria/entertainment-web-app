import "./App.css";
import GlobalStyles from "./components/GlobalStyles";
import Navigation from "./components/Navigation";
import Search from "./components/Search";
import styled from "styled-components";
// import MainPage from "./pages/MainPage";

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Navigation />
      <MainPart>
        <Search />
      </MainPart>
      {/* <MainPage /> */}
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  align-items: top;
  justify-content: center;
  height: 100vh;
  width: 100%;
  margin: 15px 0;
`;
const MainPart = styled.div`
  width: 100%;
`;
