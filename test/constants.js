const { ethers } = require("hardhat");

const infiniteApproval = "115792089237316195423570985008687907853269984665640564039457584007913129639935";

const decimals = 18;
const amountS = (100).toString();
const amountM = (500).toString();
const amountL = (750).toString();
const amountXL = (1000).toString();

const BN_S = ethers.utils.parseUnits(amountS, decimals);
const BN_M = ethers.utils.parseUnits(amountM, decimals);
const BN_L = ethers.utils.parseUnits(amountL, decimals);
const BN_XL = ethers.utils.parseUnits(amountXL, decimals);

const name1Bytes32 = ethers.utils.formatBytes32String("StreeFighterII");
const name2Bytes32 = ethers.utils.formatBytes32String("Doom");
const name3Bytes32 = ethers.utils.formatBytes32String("Fzero");

const getAddressFromEvent = (receipt) => {
  const event = receipt.events.find((event) => event.event === "NewGameCreated");
  const [owner, newGameAddress, newGameID, newGameName] = event.args;
  return newGameAddress;
};

module.exports = {
  infiniteApproval,
  BN_S,
  BN_M,
  BN_L,
  BN_XL,
  name1Bytes32,
  name2Bytes32,
  name3Bytes32,
  getAddressFromEvent,
};
