import styled from "styled-components";
import MintItem from "./mintItem";

const List = styled.div``;

const testData = [
  {
    id: 1,
    colorNum: "red",
    hash: "0x123asfdlawklasdlfkawl",
    level: "1",
  }
]

const mintFunction = () => {
return testData.map((v,k)=>{
  return <MintItem key={k} data={v}/>
})

}

const MintList = () => {
  return (
    <>
      <List>
        <h3 style={{ marginBottom: "10px" }}>NFT 리스트</h3>
        <ul>
          {mintFunction()}
        </ul>
      </List>
    </>
  );
};

export default MintList;
