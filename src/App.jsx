import styled, { createGlobalStyle } from "styled-components";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import { flexMixin } from "./styled/styled";

const Section = styled.section`
  ${flexMixin("row", "center", "start", "20px", "wrap")}
  padding: 20px 40px;
`;
const GlovalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
}

body {
  background-color: #121212;
}

`;

function App() {
  return (
    <>
      <GlovalStyle />
      <main>
        <Header />
        <Section>
          {contents.map((el) => (
            <Content key={el.id} content={el} />
          ))}
        </Section>
      </main>
    </>
  );
}

export default App;
