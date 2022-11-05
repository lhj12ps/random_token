// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";

contract MintColor is ERC721Enumerable, Ownable{
  constructor(string memory _name, string memory _symbol, uint _index) ERC721(_name, _symbol){
  }

  function colorToken() public{
    uint256 colorTokenId = totalSupply() + 1;
    _mint(msg.sender,colorTokenId);
  }

  function mintToken(string memory) public payable onlyOwner{

  }
}