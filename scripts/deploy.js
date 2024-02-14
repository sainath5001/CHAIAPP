const hre = require("hardhat");

async function main() {
  const chai = await hre.ethers.deployContract("chai"); //fetching bytecode and ABI
  //const chai = await Chai.deploy(); //creating an instance of our smart contract

  await chai.waitForDeployment();//deploying your smart contract

  console.log("Deployed contract address:",`${chai.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

//0x9e1d576F9Dc14aB33b157148a3c5B74B0A634b78