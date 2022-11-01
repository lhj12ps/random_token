import styled from "styled-components";
import GlobalStyle from "./style/globalStyle";
import MintButton from "./components/mintButton";
import MintList from "./style/mintList";
import useWeb3 from "./hooks/useWeb3";

const App = () => {
  const [web3, account] = useWeb3();
  return (
    <>
      <GlobalStyle />
      <div style={{ padding: "30px" }}>
        <MintButton />
        <MintList />
      </div>
    </>
  );
};

export default App;
