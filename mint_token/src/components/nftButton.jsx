import useWeb3 from "../hooks/useWeb3";
import useToken from "../hooks/useToken";

const MintButton = () => {
  const [web3, account] = useWeb3();
  const tokenInfo = useToken(account);

  const mintFunc = async () => {
    try {
      const request = await tokenInfo.methods.mintToken("로그인정보").send({
        from: account,
        value: web3.utils.toWei("0.000001", "ether"),
        gas: 3000000,
      });

      const balanceInfo = await tokenInfo.methods.totalSupply().call()
      console.log(balanceInfo);
    } catch (e) {
      console.log("mintToken Error", e.message);
    }
  };

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
        onClick={mintFunc}
      >
        민팅버튼
      </button>
    </div>
  );
};

export default MintButton;
