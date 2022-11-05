// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20{
  string public _name = "testToken";
  string public _symbol = "TTK";
   uint256 public _totalSupply = 2000 * (10 ** decimals());

  // 구조체 이름 생략
  constructor() ERC20(_name,_symbol) {
    // _mint() : 컨트랙트를 배포한 사람에게 토큰 발행
    _mint(msg.sender, _totalSupply);
  }

  // mint 함수 정의
  function mint(address to, uint amount) public {
    _mint(to,amount);
  }
}