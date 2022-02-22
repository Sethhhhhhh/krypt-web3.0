const hre = require("hardhat");

const main = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log("Transactions deployed to:", transactions.address);
}

const run = async () => {
	try {
		await main();
		process.exit(0);
	}
	catch (err) {
		console.error(err.message)
		process.exit(1);
	}
}

run();
