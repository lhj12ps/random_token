// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20{
  uint public token;

  function tokenMint() public{
    _mint("Color",20); 
  }
}