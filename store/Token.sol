// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";

contract Token is ERC721Enumerable,Ownable{
  string tokenName;
  string tokenSymbol;

  bool public isEnabled;
  mapping(uint=>string) public metadataURI;
  event TokenCreated(uint _tokenId, string _metadata);

  // 구조체 이름 생략
  constructor(string memory _name, string memory _symbol) ERC721(_name,_symbol){
    // _mint() : 컨트랙트를 배포한 사람에게 토큰 발행
  tokenName = _name;
  tokenSymbol = _symbol;
  }

  // mint 함수 정의
  function mintToken(string memory _metadata) public payable onlyOwner{
      uint tokenId = totalSupply() + 1;
    _mint(msg.sender, tokenId);
    emit TokenCreated(tokenId, _metadata);
  }

  function tokenURI(uint _tokenId) public override view returns(string memory){
      return metadataURI[_tokenId];
  }

  function getBalances() public view returns(uint256 _amount){
    _amount = totalSupply();
    return _amount;
  }
}