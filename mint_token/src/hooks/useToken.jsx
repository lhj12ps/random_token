import { useState, useEffect } from "react";
import Web3 from "web3";
import TokenABI from "../contracts/Token.json";

const useToken = (address) => {
  const [web3, setWeb3] = useState(undefined);
  const [tokenContractInstance, setTokenContractInstance] = useState(undefined);

  useEffect(() => {
    if (!web3) {
      setWeb3(new Web3(window?.ethereum));
    }
    if (web3) {
      const instance = new web3.eth.Contract(TokenABI, address);
      setTokenContractInstance(instance);
    }
  }, [web3, address]);

  return tokenContractInstance;
};

export default useToken;
