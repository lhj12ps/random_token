import styled from "styled-components";
import GlobalStyle from "./style/globalStyle";
import MintButton from "./components/mintButton";
import NFTButton from "./components/nftButton";
import MintList from "./style/mintList";
import useWeb3 from "./hooks/useWeb3";
import UserInfo from "./components/userInfo";

const App = () => {
  const [web3, account] = useWeb3();
  return (
    <>
      <GlobalStyle />
      <div style={{ padding: "30px" }}>
        <UserInfo />
        <div style={{display:"flex"}}>
          <MintButton />
          <NFTButton />
        </div>
        <MintList />
      </div>
    </>
  );
};

export default App;
