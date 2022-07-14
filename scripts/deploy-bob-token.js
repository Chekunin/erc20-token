async function main() {
	const [deployer] = await ethers.getSigners();

	console.log("Deploying contracts with the account:", deployer.address);
	console.log("Account balance:", (await deployer.getBalance()).toString());

	const TestTokenForBob = await ethers.getContractFactory("TestTokenForBob");
	const testTokenForBob = await TestTokenForBob.deploy();

	console.log("TokenForBob address:", testTokenForBob.address);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});