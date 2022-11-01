// Token.js를 테스트하는 테스트코드
const Token = artifacts.require("Token");

describe("Token", () => {
  let tokenDeployed;

  it("Token deployed", async () => {
    tokenDeployed = await Token.deployed();
  });
});
