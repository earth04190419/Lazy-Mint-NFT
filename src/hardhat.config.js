require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

// **** TRY TESTING ON A DIFFERENT BLOCKCHAIN WITH A DIFFERENT ADAPTER
// **** USE THE SAME NETWORK AND ADAPTER AS THE ONE FROM THE TUTORIAL - https://docs.chain.link/docs/advanced-tutorial/
// **** NEXT STEP: TRY DEPLOYING THE ORIGINAL TUTORIAL CONTRACT, THEN IF THAT DOESNT WORK, CHECK IT ON THE ORIGINAL NETWORK AND THEN SWITCH BACK

const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
    solidity: "0.8.4",
    networks: {
        hardhat: {},
        matic: {
            url: "https://polygon-rpc.com/",
            accounts: [PRIVATE_KEY],
        },
        maticMumbai: {
            url: "https://rpc-mumbai.maticvigil.com/",
            accounts: [PRIVATE_KEY],
        },
    },
    solidity: {
        compilers: [{ version: "0.8.0", settings: { optimizer: { enabled: true, runs: 200 } } }],
    },
};
