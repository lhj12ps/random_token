// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20{
  constructor() ERC20("Test","TTK") {
    _mint(msg.sender, 100000000e18);
  }

  function mint(address to, uint256 amount) public {
    _mint(to,amount);
  }
}