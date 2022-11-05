import useWeb3 from "../hooks/useWeb3";

const MintButton = () => {
  const [web3,account] = useWeb3();
  if(web3!==null){
    console.log('web3 : ',web3.eth)
  }
  
  return (
    <div>
      <h3 style={{ marginBottom: "10px" }}>NFT 민팅버튼</h3>
      <button
        style={{
          width: "80px",
          height: "50px",
          marginBottom: "50px",
          borderRadius: "10%",
        }}
      >
        민팅버튼
      </button>
    </div>
  );
};

export default MintButton;
