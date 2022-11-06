// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";

contract Token is ERC20,Ownable{
  address owner;
  string name;
  string symbol;
  uint256 public tokenAmount = 200;

  constructor(string memory _name, string memory _symbol, uint256 _amount) {
    owner = msg.sender;
    name = _name;
    symbol = _symbol;
  }

  function mint(address to, uint amount) public {
    _mint(to, amount);
  }
}