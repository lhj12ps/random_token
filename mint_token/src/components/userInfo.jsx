import useWeb3 from "../hooks/useWeb3";

const UserInfo = () => {
  const [web3, account] = useWeb3();
  if (web3 !== null) {
    
  }


  return (
    <div style={{ marginBottom: "20px" }}>
      <p>접속한 계정 : {account}</p>
    </div>
  );
};

export default UserInfo;
