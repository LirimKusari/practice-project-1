import styled from "styled-components";
import "./App.css";
import Title from "./Components/Title";
import Card from "./Components/UI/Card";
import FormContainer from "./Components/Form/FormContainer";

const text = "Hello World";

const AppWrapper = styled.div`
  background: #444444;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <AppWrapper className="App">
      <Card>
        <FormContainer></FormContainer>
      </Card>
    </AppWrapper>
  );
}

export default App;
