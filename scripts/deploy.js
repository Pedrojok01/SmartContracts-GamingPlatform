require("dotenv").config();
const hre = require("hardhat");
const fs = require("fs");

const TEST_L3P = "0xE413Bfbc963fdB56Fe12A2501aa58cD4913553ef";

async function main() {
  const ethers = hre.ethers;
  const upgrades = hre.upgrades;

  console.log("network:", await ethers.provider.getNetwork());

  const signer = await ethers.getSigners()[0];
  console.log("signer:", await signer.getAddress());

  const GameFactory = await ethers.getContractFactory("GameFactory", { signer: signer });
  const gameFactory = await GameFactory.deploy(TEST_L3P);
  await gameFactory.deployed();

  console.log("GameFactory deployed to:", GameFactory.address);

  const data = {
    address: GameFactory.address,
    abi: JSON.parse(GameFactory.interface.format("json")),
  };
  fs.writeFileSync("frontend/src/GameFactory.json", JSON.stringify(data));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
