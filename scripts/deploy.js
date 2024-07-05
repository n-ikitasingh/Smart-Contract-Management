const hre = require("hardhat");

async function main() {
  const initBalance = 1;
  const FunctionFrontend = await hre.ethers.getContractFactory("FunctionFrontend");
  const functionFrontend = await FunctionFrontend.deploy(initBalance);
  await functionFrontend.deployed();

  console.log(`Contract deployed with an initial balance of ${initBalance} ETH to ${functionFrontend.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

