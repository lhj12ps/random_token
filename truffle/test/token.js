const Token = artifacts.require("Token");

describe("Token Test", () => {
  let token;
  let owner;
  let mintToken;
  let balance;

  it("Token deployed", async () => {
    token = await Token.deployed();
    owner = token.address;
    mintToken = await token.mint(owner,100)
    console.log('token CA : ',owner)
    // console.log('토큰 민트 결과 : ',mintToken)
  });

  it("Token Balance",async ()=>{
    balance = await token.balanceOf(owner)
    const total = await token.totalSupply()
    console.log(balance)
    console.log(total)
  })
});
