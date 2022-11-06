const MyToken = artifacts.require("Token");

module.exports = function (deployer) {
  deployer.deploy(MyToken);
};
